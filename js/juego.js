
document.addEventListener('DOMContentLoaded', () => {
    // Recuperar los colores almacenados en sessionStorage
    let storedColors = sessionStorage.getItem('currentColor');
    console.log(storedColors);
    
    if (storedColors) {
        // Convertir los colores almacenados de formato JSON a un array de JavaScript
        let combinationColors = JSON.parse(storedColors);
        console.log("estoy aqui");
        // Asignar los colores recuperados a los elementos
        combinationColors.forEach((color, index) => {
            let squareId = 'J' + (index + 1);
            let squareElement = document.getElementById(squareId);

            if (squareElement) {
                squareElement.style.backgroundColor = color;
                
            }
            return squareElement;
        });
        console.log("hasta aquí funciona");
        
    }
    
});

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