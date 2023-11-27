
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
        });
    }
});



function getBackgroundColor(element) {
    let color = element.style.backgroundColor;
   
    if (!color) {
       if (window.getComputedStyle) {
         color = window.getComputedStyle(element).backgroundColor;
       } else if (element.currentStyle) {
         color = element.currentStyle.backgroundColor;
       }
    }
   
    return color;
   }
   
   function changeBackgroundColor(elements, color) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
   }
   
   function handleClick(event) {
    var sourceElement = event.currentTarget;
    var destinationElements = document.getElementsByClassName("squarePlay");
   
    var sourceColor = getBackgroundColor(sourceElement);
    changeBackgroundColor(destinationElements, sourceColor);
   }
   
   // asociar la función handleClick al evento click del elemento con id sourceElement
   var squareColors = document.getElementsByClassName("squareColors");
   for (var i = 0; i < squareColors.length; i++) {
       squareColors[i].addEventListener("click", handleClick);
   }