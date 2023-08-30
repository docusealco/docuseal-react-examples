const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/env','@babel/preset-react'] },
        }
      }
    ]
  }
};
