const path = require("path")

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "web",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  module: {
  },
  plugins: []
}