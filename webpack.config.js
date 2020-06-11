const path =  require('path');

module.exports = {
   
    entry: ['./src/index.js', './styles/style.scss'],
    devServer: {
      filename: 'index.html',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'css/[name].blocks.css',
                }
              },
              {
                loader: 'extract-loader'
              },
              {
                loader: 'css-loader?-url'
              },
              
              {
                loader: 'sass-loader'
              }
            ]
          ,
          }
        ]
      },
      
    mode: 'development'
}