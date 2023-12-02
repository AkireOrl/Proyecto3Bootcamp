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
  

  