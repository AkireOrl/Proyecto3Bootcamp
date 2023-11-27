let div1 = document.getElementById("J1");
let div2 = document.getElementById("J2");
let div3 = document.getElementById("J3");
let div4 = document.getElementById("J4");

let divsArray = [div1, div2, div3, div4];
//console.log(divsArray);

let storedColors = sessionStorage.getItem('currentColor');
let combinationColors = JSON.parse(storedColors);

    div1.style.backgroundColor = combinationColors[0];
    div2.style.backgroundColor = combinationColors[1];
    div3.style.backgroundColor = combinationColors[2];
    div4.style.backgroundColor = combinationColors[3];

div1.addEventListener('click', function() {
    let color1 =  div1.style.backgroundColor;
    sessionStorage.setItem('color', color1);
    //console.log(color1);
});
div2.addEventListener('click', function() {
    let color2 =  div2.style.backgroundColor;
    sessionStorage.setItem('color', color2);
    //console.log(color2);
});
div3.addEventListener('click', function() {
    let color3 =  div3.style.backgroundColor;
    sessionStorage.setItem('color', color3);
    //console.log(color3);
});
div4.addEventListener('click', function() {
    let color4 =  div4.style.backgroundColor;
    sessionStorage.setItem('color', color4);
    //console.log(color4);
});

let divJuego1 = document.getElementById("P1");
let divJuego2 = document.getElementById("P2");
let divJuego3 = document.getElementById("P3");
let divJuego4 = document.getElementById("P4");
let divsJuegoArray = [divJuego1, divJuego2, divJuego3, divJuego4];
console.log(divsJuegoArray);

for (let i = 0; i < divsJuegoArray.length; i++){
     divsJuegoArray[i].addEventListener('click', function(){
         console.log("Voy por aquí")
        let color = sessionStorage.getItem('color');
        divsJuegoArray[i].style.backgroundColor = color;
});
}
// divJuego1.addEventListener('click', function(){
//     let color = sessionStorage.getItem('color');
//     divJuego1.style.backgroundColor = color;
// });

// let pintaDivs = document.addEventListener('DOMContentLoaded', () => {
//     // Recuperar los colores almacenados en sessionStorage
//     let storedColors = sessionStorage.getItem('currentColor');
//     console.log(storedColors);
    
//     if (storedColors) {
//         // Convertir los colores almacenados de formato JSON a un array de JavaScript
//         let combinationColors = JSON.parse(storedColors);
//         console.log("estoy aqui");
//         // Asignar los colores recuperados a los elementos
//         combinationColors.forEach((color, index) => {
//             let squareId = 'J' + (index + 1);
//             let squareElement = document.getElementById(squareId);


//             if (squareElement) {
//                 squareElement.style.backgroundColor = color;
                
//             }
            
//         });
        
//         //return color;
//     }
    
// });
//console.log(squareElement);
// let combinacionInicial = squareElement;
// console.log(combinacionInicial);









// function getBackgroundColor(element) {
   
//     let color = element.style.backgroundColor;
    
//     if (!color) {
//        if (window.getComputedStyle) {
//          color = window.getComputedStyle(element).backgroundColor;
//        } else if (element.currentStyle) {
//          color = element.currentStyle.backgroundColor;
//        }
//     }
//     //console.log("el codigo hasta aquí no se para porque muestra esto")
//     return color;
//    }
   
//    function changeBackgroundColor(elements, color) {
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style.backgroundColor = color;
//         console.log(elements.lenght);
//     }
//    }
   
//    function handleClick(event) {
//     let sourceElement = event.currentTarget;
//     let destinationElements = document.getElementsByClassName("squarePlay");
   
//     let sourceColor = getBackgroundColor(sourceElement);
//     changeBackgroundColor(destinationElements, sourceColor);
//    }
   
//    // asociar la función handleClick al evento click del elemento con id sourceElement
//    let squareColors = document.getElementsByClassName("squareColors");
//    for (let i = 0; i < squareColors.length; i++) {
//        squareColors[i].addEventListener("click", handleClick);
//    }