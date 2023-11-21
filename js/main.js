// Guardar Nombre: utiliza DOM para coger el nombre y sessionStorage para guardarlo durante lal sesión.
const guardarNombre = () => {
    let name = document.getElementById("nombre").value;
    sessionStorage.setItem("name", name);
    if (name == "") {
      sessionStorage.setItem("name", "Jugador 1");
    } else {
      sessionStorage.setItem("name", name);
    }
  }
  let name = sessionStorage.getItem("nombre")
  
  // // COLOR PICKER
  
  // window.addEventListener("load", () => startup());
  
  // let colorPicker = document.getElementsByClassName("colorpicker");
  // let arrayColorPicker = Array.from(colorPicker);
  // let objectChosenColours = {};
  // let arrayChosenColours = [];
  
  // // collect all colour pickers in the same array
  // const startup = () => {
  //   arrayColorPicker.map(
  //     (element) => {
  //       element.value = "#8a2be2";
  //       element.addEventListener("input", (event) => updateSquare(event, element));
  //       element.select();
  //     }
  //   )
  // }
  
  // // paint each square with the selected colour
  // const updateSquare = (event, element) => {
  //   let colorSquare = document.getElementById(`square${element.id}`);
  //   colorSquare.style.backgroundColor = event.target.value;
  //   let color = getComputedStyle(colorSquare).backgroundColor;
  //   objectChosenColours[element.id] = color;
  // }
  
  // //save colours in session storage
  // const saveChosenColours = () => {
  //   sessionStorage.setItem("chosenColours", JSON.stringify(objectChosenColours));
  //   window.location.href = "./pages/game.html";
  // }
  
  // let chosenColours = JSON.parse(sessionStorage.getItem("chosenColours"));
  
  
  // // change the object into an array taking only the colours
  // const changeColoursToArray = () => {
  //   for (const property in chosenColours) {
  //     arrayChosenColours.push(chosenColours[property]);
  //   }
  // }
  
  // changeColoursToArray();
  
  