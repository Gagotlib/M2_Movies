//funcion que cambia el estilo del boton
function toggleMostrarBtn() {
  const botonMostrar = document.getElementById("mostrartodas")
  if (botonMostrar.classList.contains("disabled")) {
    botonMostrar.classList.remove("disabled")
    botonMostrar.classList.add("active")
  }
}

module.exports = toggleMostrarBtn
