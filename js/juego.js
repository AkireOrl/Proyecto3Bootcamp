//Creo un array con los colores escogidos
let div1 = document.getElementById("J1");
let div2 = document.getElementById("J2");
let div3 = document.getElementById("J3");
let div4 = document.getElementById("J4");

let divsArray = [div1, div2, div3, div4];
//console.log(divsArray);
//Asigno los colores por orden de elección en la muestra
let storedColors = sessionStorage.getItem('currentColor');
let combinationColors = JSON.parse(storedColors);

    div1.style.backgroundColor = combinationColors[0];
    div2.style.backgroundColor = combinationColors[1];
    div3.style.backgroundColor = combinationColors[2];
    div4.style.backgroundColor = combinationColors[3];

    //Cambio de rgb to hex al recoger colores
    function toHex(color) {
        if (color.substr(0, 1) === '#') {
            return color;
        }
        let digits = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color);
    
        let red = parseInt(digits[2]);
        let green = parseInt(digits[3]);
        let blue = parseInt(digits[4]);
    
        let hex = '#' + ('0' + red.toString(16)).slice(-2) +
                    ('0' + green.toString(16)).slice(-2) +
                    ('0' + blue.toString(16)).slice(-2);
    
        return hex;
    }
//Almaceno en session segun evento onclick
div1.addEventListener('click', function() {
    let color1 =  div1.style.backgroundColor;
    let hexColor1 = toHex(color1);
    sessionStorage.setItem('color', hexColor1);
    console.log(hexColor1);
});
div2.addEventListener('click', function() {
    let color2 =  div2.style.backgroundColor;
    let hexColor2 = toHex(color2);
    sessionStorage.setItem('color', hexColor2);
    console.log(hexColor2);
});
div3.addEventListener('click', function() {
    let color3 =  div3.style.backgroundColor;
    let hexColor3 = toHex(color3);
    sessionStorage.setItem('color', hexColor3);
    console.log(hexColor3);
});
div4.addEventListener('click', function() {
    let color4 =  div4.style.backgroundColor;
    let hexColor4 = toHex(color4);
    sessionStorage.setItem('color', hexColor4);
    console.log(hexColor4);
});

//Declaro variantes de el primer intento y creo array para asignarle colores por eveno click
let colorArray = ["","","",""];
let divJuego1 = document.getElementById("P1");
let divJuego2 = document.getElementById("P2");
let divJuego3 = document.getElementById("P3");
let divJuego4 = document.getElementById("P4");
let divsJuegoArray = [divJuego1, divJuego2, divJuego3, divJuego4];
//console.log(divsJuegoArray);


//Cojo colores de muestra y se lo doy al primer intento

for (let i = 0; i < 4; i++){
     divsJuegoArray[i].addEventListener('click', function(){
         //console.log("Voy por aquí")
        let color = sessionStorage.getItem('color');
        divsJuegoArray[i].style.backgroundColor = color;
        //creo un array con los colores del primer intento
       colorArray[i] = color;
    
        // Guardar el array colorArray en sessionStorage
        sessionStorage.setItem('colorArray', JSON.stringify(colorArray));
        
        console.log(colorArray);    
});
}



//Combinación ganadora barajando el array divsArray que viene los colores elegidos en la page colores.html
let divsArrayE = [combinationColors[0], combinationColors[1], combinationColors[2],combinationColors[3]];
let randomDivsArray = [];

const correctAnswer = () => {

    divsArrayE.sort(() => Math.random() - 0.5);

    for (i = 0; i < 4; i++) {
        randomDivsArray.push(divsArrayE[i]);
        //console.log(divsArrayE);
    }
}

correctAnswer();
console.log(randomDivsArray, "Soy la solución");


//comparar arrays

// function compareColors() {
//     console.log(colorArray);
//     console.log(randomDivsArray);

//     let matchCount = 0; // Variable para contar el número de coincidencias

//     const isEqual = colorArray.every(function(value, index) {
//         if (value === randomDivsArray[index]) {
//             matchCount++; // Incrementar la cuenta si hay coincidencia
//         }
//         return value === randomDivsArray[index];
//     });

//     if (isEqual) {
//         alert("Ganaste!");
//     } else {
//         alert("No has ganado! Intenta nuevamente.");
//     };

//     const squareCheckInElements = document.getElementsByClassName("squareCheckIn");

//     // Cambiar el fondo de los elementos que tienen la clase "squareCheckIn" según el número de coincidencias
//     for (let i = 0; i < squareCheckInElements.length; i++) {
//         if (i < matchCount) {
//             squareCheckInElements[i].style.backgroundColor = "white";
//         } else {
//             squareCheckInElements[i].style.backgroundColor = ""; // Restaurar el color original
//         }
//     }

//     console.log("voy por aquí");
// }

//Circulos del check en proceso

let filterArray = colorArray.filter((value, index) => value === randomDivsArray[index]);

if (filterArray.length === colorArray.length) {
    document.getElementById('C1').style.backgroundColor = 'white';
    document.getElementById('C2').style.backgroundColor = 'white';
    document.getElementById('C3').style.backgroundColor = 'white';
    document.getElementById('C4').style.backgroundColor = 'white';
}


// Intentos 

let attemptCount = 0; // Contador de intentos
const maxAttempts = 10; // Número máximo de intentos permitidos

function compareColors() {
    attemptCount++; // Incrementar el contador de intentos

    // Si se alcanza el número máximo de intentos, mostrar la alerta de ganador y reiniciar todo
    if (attemptCount >= maxAttempts) {
        alert("Has alcanzado el número máximo de intentos.");
        resetGame();
        return;
    }

    // Comprobar si todos los colores son blancos (esto es, están en el índice 0 del array de colores)
    const allColorsWhite = colorArray.every(color => color === 0);

    if (allColorsWhite) {
        alert("Ganaste!");
        resetGame();
    } else {
        alert("No has ganado! Intenta nuevamente.");
    }

    // Actualizar el fondo de los elementos con la clase "squareCheckIn" según el número de coincidencias
    const squareCheckInElements = document.getElementsByClassName("squareCheckIn");
    for (let i = 0; i < squareCheckInElements.length; i++) {
        if (i < colorArray.length) {
            squareCheckInElements[i].style.backgroundColor = colorArray[i] === randomDivsArray[i] ? "white" : "";
        } else {
            squareCheckInElements[i].style.backgroundColor = ""; // Restaurar el color original
        }
    }

    // Actualizar el contador de intentos en el HTML
    const attemptCounterElement = document.getElementsByClassName("attemptCounter")[0];
    attemptCounterElement.textContent = `Intentos restantes: ${maxAttempts - attemptCount}`;
}