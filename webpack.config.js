'use strict';

const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'app-artist': './src/app-artist/index.ts',
    'app-customer': './src/app-customer/index.ts',
    'model': './src/model/index.ts',
    'pagar-me': './src/pagar-me/index.ts',
    'rest': './src/rest/index.ts',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(md)$/,
        use: 'raw-loader'
      },
    ]
  },
  plugins: [new CopyPlugin([{ from: '**/*.d.ts', context: 'src/' }])],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name]/index.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'lib'),
  },
};
