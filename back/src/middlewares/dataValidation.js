function dataValidation(req, res, next) {
  const { title, year, director, duration, genre, rate, poster } = req.body
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({ error: "Todos los campos son obligatorios", message: "Todos los campos son obligatorios" })
  }
  if (isNaN(year) || year > 2024 || year < 1900) {
    return res.status(400).json({ error: "año no puede ser mayor al actual ni menor a 1900", message: "año no puede ser mayor al actual ni menor a 1900" })
  }
  if (isNaN(rate) || rate < 1 || rate > 10) {
    return res.status(400).json({ error: "la calificacion debe ser un numero entre 1 y 10", message: "la calificacion debe ser un numero entre 1 y 10" })
  }

  next()
}

module.exports = dataValidation
