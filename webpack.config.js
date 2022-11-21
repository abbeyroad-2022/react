// react_start/webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: {
    'js/app': ['./src/App.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};