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
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ ,query: { presets: ['es2015', 'react']}},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,query: { presets: ['es2015', 'react']}},
      { test: /\.css$/, loader: [ "style-loader","css-loader", 'sass-loader' ] },
      {test: /\.scss?$/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader!"},
      {test: /\.(png|jpg)$/, loader: "file-loader?name=images/[name].[ext]"}
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
