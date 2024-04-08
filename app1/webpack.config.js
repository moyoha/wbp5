const path = require("path")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
    mode: "development",
    devtool: false,
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        pubilcPath: "http://localhost:8081/dist/",
    }
}