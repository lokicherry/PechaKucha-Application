var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },

        {
          test: /\.css$/,
            include: APP_DIR,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.(png|jpeg|ttf|...)$/,
            use: [
                { loader: 'url-loader', options: { limit: 8192 } }
                // limit => file.size =< 8192 bytes ? DataURI : File
            ]
        }

    ]
  }
};

module.exports = config;
