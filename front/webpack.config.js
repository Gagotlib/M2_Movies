/* eslint-disable n/no-path-concat */

//! webpack para la pagina mis peliculas
module.exports = {
  mode: "development",
  entry: "./scripts/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
}
