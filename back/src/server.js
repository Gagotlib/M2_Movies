const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const homeRouter = require("./routes/homeRouter")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(homeRouter)

module.exports = app
