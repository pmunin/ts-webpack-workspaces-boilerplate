const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
var config={
  entry: './src/index.ts',
  mode:"development",
  //target:'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    libraryTarget:'umd',
    filename: 'index.js',
    path: path.resolve('./dist')
  }
};

module.exports = config;