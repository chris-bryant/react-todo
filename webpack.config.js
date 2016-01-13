module.exports = {
  context: __dirname + "/app",
  entry: [
    "./components/TodoApp.jsx",
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: "./build",
    filename: "bundle.js",
    sourceMapFilename: "[file].map"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
