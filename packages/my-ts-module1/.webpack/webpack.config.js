const path = require('path');
/**
 * @typedef {(import('webpack').Configuration)} WebPackConfiguration
 * @typedef { <T> } Modifier
 */



 /**
  * @template T
  * @param {T} baseValue 
  * @param {(T|((p?:T)=>void))[]} modifications
  * @returns {T}
  */
function cloneOf(baseValue, ...modifications)
{
  let res =  Object.assign({},baseValue); //Object.create(baseConfig);
  for (const modification of modifications) {
    if(modification instanceof Function) modification(res);
    else Object.assign(res, modification);
  }
  return res;
}

/**
 * @type {(WebPackConfiguration)}
 */
let baseConfiguration={
  entry: './src/index.ts',
  mode:"development",
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

/**
 * @type {(WebPackConfiguration[])}
 */
var configs=[
  cloneOf(baseConfiguration, { mode:"development"}),
  cloneOf(baseConfiguration,
    { mode:"production"},
    config=>{ config.output = cloneOf(config.output, { filename:"index.min.js"}) },
  ),
];

module.exports = configs;