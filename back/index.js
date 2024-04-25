const app = require("./src/server")
const dbCon = require("./src/config/dbCon")

dbCon()
  .then((res) => {
    const puerto = 3000
    app.listen(puerto, () => {
      console.log(`servidor funcionando en puerto ${puerto}`)
    })
  })
  .catch((err) => {
    console.log("Error al conectar con la Base de Datos")
  })
