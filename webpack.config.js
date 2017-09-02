'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/client/js/index.js',

  output: {
    path: __dirname,
    publicPath: "/",
    filename: './public/js/app.js'
  },
  
  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('./public/css/app.css')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          { fallback: 'style-loader', use: 'css-loader!sass-loader?outputStyle=expanded' }
        )
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpe?g|png|svg|ico)$/,
        loader: 'file-loader?name=./public/img/[name].[ext]'
      }
    ]
  }
};
