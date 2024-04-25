const axios = require("axios")

// funcion para hacer post y agregar movie a bDD
async function postMovie(movie) {
  try {
    const url = "http://localhost:3000/movies"
    await axios.post(url, movie)
    alert("pelicula agregada a la la BDD con éxito")
  } catch (error) {
    res.status(500).json({
      message: `Hubo un error del servidor al enviar los datos: ${error}`,
    })
    console.log(error)
  }
}

module.exports = { postMovie }
