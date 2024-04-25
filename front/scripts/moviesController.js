const axios = require("axios")
const showMovies = require("./showMovies")
const toggleMostrarBtn = require("./toggleMostrarBtn")

// creo variable contenedora donde se alojaran las movies
let allMovies = []

// funcion que hace get al backend y el contenido de respuesta lo asigna a variable contenedora
async function getMovies() {
  try {
    const url = "http://localhost:3000/movies"
    const { data } = await axios.get(url)
    allMovies = data
    return data
  } catch (error) {
    const errorH1 = document.createElement("h1")
    errorH1.innerText = `Hubo un error al traer los datos del servidor.\n El error: "${error}"`
    const divCards = document.getElementById("contenedorTarjetas")
    divCards.appendChild(errorH1)
  }
}
// funcion que muestra todas las peliculas en la BDD
function showAllMovies() {
  showMovies(allMovies)
  const botonMostrar = document.getElementById("mostrartodas")
  botonMostrar.classList.remove("active")
  botonMostrar.classList.remove("btn-light")
  botonMostrar.classList.add("disabled")
  botonMostrar.classList.add("btn-dark")
}

// funcion que filtra las pelicuas a mostrar de acuerdo al titulo
function filterMovies(searchTerm) {
  const filteredMovies = allMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  toggleMostrarBtn()
  showMovies(filteredMovies)
}

// funcion que filtra las pelicuas a mostrar de acuerdo al director
function filterMoviesByDirector(searchTerm) {
  const filteredMovies = allMovies.filter((movie) => {
    return movie.director.toLowerCase().includes(searchTerm.toLowerCase())
  })

  toggleMostrarBtn()
  showMovies(filteredMovies)
}

// funcion que borra todo el contenido mostrado y reinicia el input
function borrarTodo() {
  const divCards = document.getElementById("contenedorTarjetas")
  divCards.innerHTML = ""

  const inputBuscar = document.getElementById("buscarMovie")
  inputBuscar.value = ""

  const inputBuscarByDirector = document.getElementById("buscarDirector")
  inputBuscarByDirector.value = ""
  toggleMostrarBtn()
}

module.exports = { getMovies, showAllMovies, filterMovies, borrarTodo, filterMoviesByDirector }
