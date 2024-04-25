const createMovieCard = require("./createMovieCard")

// funcion que muestra las películas en el DOM
const showMovies = (movies) => {
  const divCards = document.getElementById("contenedorTarjetas") // me traigo el div contenedor
  divCards.innerHTML = ""
  // por cada movie traida por movies,
  movies.map((movie) => {
    const movieCard = createMovieCard(movie) // creo una tarjeta
    divCards?.appendChild(movieCard) // la inserto en el div contenedor
    return movieCard
  })
}

module.exports = showMovies
