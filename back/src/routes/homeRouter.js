const { Router } = require("express")
const moviesRouter = require("./moviesRouter")

// router principal
const homeRouter = Router()
// router para movies
homeRouter.use("/movies", moviesRouter)

module.exports = homeRouter
