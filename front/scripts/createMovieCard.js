// funcion que crea una tarjeta HTML para UNA movie
const createMovieCard = (movie) => {
  // desestructuro el objeto traido por arg
  const { title, poster, year, director, duration, genre, rate } = movie

  // creo un div y los elementos que van adentro
  const movieCard = document.createElement("div")
  movieCard.className = "tarjeta"
  movieCard.innerHTML = `
    <a href='' class='amovie'>${title}</a>
    <img src="${poster}" alt="${title}">
    <p>Director: ${director}</p>
    <p>Año: ${year}</p>
    <p>Duración: ${duration} </p>
    <p>Géneros: ${genre.join(", ")}</p>
    <p>Calificación: ${rate}</p>
    `

  return movieCard
}

module.exports = createMovieCard
