module.exports = {
  entry: './main.js'
, debug: true
, devtool: 'source-map'
, output: {
    path: './'
  , filename: 'index.js'
  }
, devServer: {
    inline: true
  , port: 3000
  }
, module: {
    loaders: [
      { test: /\.js$/
      , exclude: /node_modules/
      , loader: "babel-loader"
      }
    ]
  }
}
