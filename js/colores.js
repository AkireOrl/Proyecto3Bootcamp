let combinationColors = ["","","",""]

document.querySelectorAll('.colorpicker').forEach(colorPicker => {
    colorPicker.addEventListener('input', () => {
        let squareId = colorPicker.id.replace('B', 'squareB');
        document.getElementById(squareId).style.backgroundColor = colorPicker.value;
        console.log("hola");
        if (colorPicker.id==="B1") {
            combinationColors[0] = colorPicker.value;
        }
        if (colorPicker.id==="B2") {
            combinationColors[1] = colorPicker.value;
        }
        //combinationColors.push(colorPicker.value);

        sessionStorage.setItem('currentColor', combinationColors);
    });
});
