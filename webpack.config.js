'use strict';

const DedupePlugin         = require('webpack/lib/optimize/DedupePlugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');

module.exports = {
  debug: true,
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  devtool: 'source-map',
  entry: {
    main: './src/main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-to-string-loader!css-loader'
      },
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new DedupePlugin(),
    new OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
