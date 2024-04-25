//funcion para validar datos
function validateData({ title, year, director, duration, genre, rate, poster, description }) {
  if (!title || !year || !director || !duration || !genre || !rate || !poster || !description) {
    alert("TODOS LOS CAMPOS SON OBLIGATORIOS")
    return false
  }

  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    alert("Por favor ingrese un año válido (entre 1900 y el año actual).")
    return false
  }

  if (isNaN(rate) || rate < 1 || rate > 10) {
    alert("Por favor ingrese una calificación válida (entre 1 y 10, puede incluir un decimal).")
    return false
  }
  return true
}

module.exports = validateData
