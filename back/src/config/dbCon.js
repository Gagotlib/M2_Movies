const mongoose = require("mongoose")
require("dotenv").config()

// MONGO_URI example = mongodb+srv://<username>:<password>@movies.vxhdtcr.mongodb.net/movies?retryWrites=true&w=majority
const MONGO_URI = process.env.MONGO_URI

const dbCon = async () => {
  await mongoose.connect(MONGO_URI)
}

module.exports = dbCon
