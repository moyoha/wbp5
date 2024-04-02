const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "web",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          (process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader),
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin()
  ]
}