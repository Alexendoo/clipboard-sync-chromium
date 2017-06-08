const path = require('path')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

module.exports = {
  entry: {
    background: './background.ts',
    popup: './popup/popup.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
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

  context: path.resolve(__dirname, 'src'),

  devtool: 'source-map',

  plugins: [
    new WebpackCleanupPlugin({
      quiet: true,
    }),
  ],
}
