const path = require('path');


module.exports = {
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-mark-dayum-editor.js',
    library: 'react-mark-dayum-editor',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      umd: 'react',
      amd: 'react'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
