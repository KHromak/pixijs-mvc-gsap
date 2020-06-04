const path =  require('path');

// This is main configuration object that tells Webpackw what to do. 
module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
      },

    mode: 'development'
}