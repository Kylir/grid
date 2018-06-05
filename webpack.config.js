const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => ({
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist',
    overlay: true
  },
  module: {    
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            },
            {
              loader: "css-loader",
              options: {modules: true}
            },
            {
              loader: "sass-loader",
              options: {}
            },
        ]
      }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({filename: "[name].css"}),
      new HtmlWebpackPlugin({
        template: "./client/index.html",
        filename: "./index.html"
      })
  ]
})