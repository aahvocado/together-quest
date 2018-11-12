var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

// we have two separate webpack files because the Node.js has its own `require` module,
// meaning it doesn't require external `node_modules`
// but the web browser needs those external modules since it has nothing
const serverPath = path.resolve(__dirname, './src/');
module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  resolve: {
    alias: {
      components: path.resolve(serverPath, 'components'),
      managers: path.resolve(serverPath, 'managers'),
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};
