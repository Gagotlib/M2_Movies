const { postMovie } = require("./servicesMovies")
const validateData = require("./validateData")

// logica para  obtener los datos de un nuevo movie y enviarlos a la base de datos
function addMovie(e) {
  e.preventDefault()
  const title = document.getElementById("inputtitulo").value
  const year = parseInt(document.getElementById("inputormaño").value)
  const director = document.getElementById("inputdirector").value
  const duration = document.getElementById("inputduracion").value
  const genre = document.getElementById("inputgeneros").value.trim().split(" ")
  const rate = parseFloat(document.getElementById("inputcalificacion").value)
  const poster = document.getElementById("inputurl").value
  const description = document.getElementById("inputdescripcion").value

  // validacion de datos ingresados
  const validado = validateData({ title, year, director, duration, genre, rate, poster, description })
  if (!validado) {
    return
  }
  const newMovie = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
    description,
  }

  // mandamos el nuevo objeto a la BD
  postMovie(newMovie)

  // reseteamos el formulario
  const formulario = document.getElementById("agregarForm")
  formulario?.reset()
}

module.exports = addMovie
