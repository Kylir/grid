const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            presets: [ 'es2015', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "[name].css",
      })
  ]
});