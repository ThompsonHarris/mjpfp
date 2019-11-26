const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'production',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
     },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
      
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
