const path = require('path');

console.log(__dirname);
module.exports = {
  entry: path.resolve(__dirname, '../../src/react'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/react'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
