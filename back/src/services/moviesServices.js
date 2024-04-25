const Movie = require("../models/Movie")

class Movies {
  constructor({ id, title, year, director, duration, genre, rate, poster, description }) {
    if (!title || !poster || !director) {
      throw new Error(" 'title', 'poster' y 'director' son obligatorios.")
    }
    this.id = id
    this.title = title
    this.year = year
    this.director = director
    this.duration = duration
    this.genre = genre
    this.rate = rate
    this.poster = poster
    this.description = description
  }
}
const getMoviesService = async () => {
  try {
    const movies = await Movie.find()
    return movies.map((movie) => new Movies(movie))
  } catch (error) {
    throw new Error(error)
  }
}

const createMovieService = async (movie) => {
  try {
    const newMovie = await Movie.create(movie)
    return newMovie
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getMoviesService,
  createMovieService,
}
