const path = require('path')
const rimraf = require('rimraf')

rimraf.sync('dist')

module.exports = {
  entry: {
    background: './src/background/background.ts',
    popup: './src/popup/popup.tsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'node_modules')],
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /.(?:json|html)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  devtool: 'source-map',
}
