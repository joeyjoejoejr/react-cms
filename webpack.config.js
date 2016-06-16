var webpack = require('webpack');
var path = require('path');
var appDir = path.resolve(__dirname, 'src/client');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: appDir + '/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: appDir,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-0', 'react'] }
      }
    ]
  },
  plugins: [ devFlagPlugin ]
};
