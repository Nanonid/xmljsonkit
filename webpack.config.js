const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode : 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    chevrotain: 'chevrotain'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    globalObject: "this",
    library : 'xmljsonkit',
    libraryTarget : 'umd',
    filename: 'xmljsonkit.js',
    path: path.resolve(__dirname, 'dist'),
  },
};