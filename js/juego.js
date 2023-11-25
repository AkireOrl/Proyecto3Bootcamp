
document.addEventListener('DOMContentLoaded', () => {
    // Recuperar los colores almacenados en sessionStorage
    let storedColors = sessionStorage.getItem('currentColor');
    console.log(storedColors);
    if (storedColors) {
        // Convertir los colores almacenados de formato JSON a un array de JavaScript
        let combinationColors = JSON.parse(storedColors);
        console.log("estoy aqui");
        // Asignar los colores recuperados a los elementos que desees
        // Por ejemplo, si tienes cuadrados o elementos para mostrar los colores, puedes hacerlo así:
        combinationColors.forEach((color, index) => {
            let squareId = 'J' + (index + 1);
            let squareElement = document.getElementById(squareId);
            
            if (squareElement) {
                squareElement.style.backgroundColor = color;
            }
        });
    }
});


