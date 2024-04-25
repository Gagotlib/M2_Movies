const { getMoviesService, createMovieService } = require("../services/moviesServices")

const getAllMoviesController = async (req, res) => {
  try {
    const movies = await getMoviesService()
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({
      message: `Hubo un error del servidor al traer los datos: ${error}`,
    })
  }
}

const postMovieController = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster, description } = req.body
    const newMovie = await createMovieService({ title, year, director, duration, genre, rate, poster, description })
    res.status(201).json(newMovie)
  } catch (error) {
    res.status(500).json({
      message: `Hubo un error del servidor al enviar los datos: ${error}`,
    })
  }
}

module.exports = { getAllMoviesController, postMovieController }
