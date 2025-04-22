const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new Dotenv()
  ],
  devServer: {
    static: './public',
    port: 3000,
    open: true,
  },
  mode: 'development', // or 'production'
};
