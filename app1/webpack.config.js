const path = require("path")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
    mode: "development",
    devtool: false,
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "http://localhost:8081/dist/"
    },
    plugins: [
        new ModuleFederationPlugin({
            // MF 应用名称
            name: "app1",
            // MF 模块入口，可以理解为该应用的资源清单
            filename: "remoteEntry.js",
            exposes: {
                "./utils": "./src/utils"
            },
        })
    ],
    // MF 应用资源提供方必须以 http(s) 形式提供服务
    // 所以这里需要使用 devServer 提供 http(s) server 能力
    devServer: {
        port: 8081,
        hot: true
    },
}