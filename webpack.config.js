/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: ['whatwg-fetch','./app/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: [ "style-loader","css-loader", 'sass-loader' ] }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new GoogleFontsPlugin({
      fonts: [
        { family: "Nunito" }
      ]
    })
  ]
}
