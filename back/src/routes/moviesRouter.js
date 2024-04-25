const { Router } = require("express")
const { getAllMoviesController, postMovieController } = require("../controllers/moviesController")
const dataValidation = require("../middlewares/dataValidation")

// router para movies
const moviesRouter = Router()
moviesRouter.get("/", getAllMoviesController)

// ruta post con validacion por middleware
moviesRouter.post("/", dataValidation, postMovieController)
module.exports = moviesRouter
