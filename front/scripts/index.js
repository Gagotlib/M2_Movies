const addMovie = require("./movieForm")
const { getMovies, showAllMovies, filterMovies, borrarTodo, filterMoviesByDirector } = require("./moviesController")

//me traigo botones e inputs y les asigno eventos

// boton mostrar
const botonMostrar = document.getElementById("mostrartodas")
botonMostrar?.addEventListener("click", showAllMovies)

// input buscar por titulo
const inputBuscar = document.getElementById("buscarMovie")
inputBuscar?.addEventListener("input", () => {
  const searchTerm = inputBuscar.value
  filterMovies(searchTerm)
})

// boton buscar por titulo
const botonBuscar = document.getElementById("buscarBtn")
botonBuscar?.addEventListener("click", () => {
  let searchTerm = document.getElementById("buscarMovie").value
  if (!searchTerm) return
  filterMovies(searchTerm)
  document.getElementById("buscarMovie").value = ""
})

// input buscar por director
const inputBuscarByDirector = document.getElementById("buscarDirector")
inputBuscarByDirector?.addEventListener("input", () => {
  const searchTerm = inputBuscarByDirector.value
  filterMoviesByDirector(searchTerm)
})

// boton buscar por director
const botonBuscarByDirector = document.getElementById("buscarDirectorBtn")
botonBuscarByDirector?.addEventListener("click", () => {
  let searchTerm = document.getElementById("buscarDirector").value
  if (!searchTerm) return
  filterMoviesByDirector(searchTerm)
  document.getElementById("buscarDirector").value = ""
})

//boton borrar
const botonBorrar = document.getElementById("borrarBtn")
botonBorrar?.addEventListener("click", borrarTodo)

document.addEventListener("DOMContentLoaded", () => {
  // me traigo las peliculas de la BDD para poder empezar a manipularla
  getMovies()

  //logica del formulario
  const formulario = document.getElementById("agregarForm")
  formulario?.addEventListener("submit", addMovie)

  const borrarBtn = document.getElementById("borrartodoBtn")
  borrarBtn?.addEventListener("click", () => {
    formulario.reset()
  })
})
