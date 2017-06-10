const path = require('path')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

module.exports = {
  entry: {
    background: './background/background.ts',
    popup: './popup/popup.tsx',
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

  context: path.resolve(__dirname, 'src'),

  devtool: 'source-map',

  plugins: [
    new WebpackCleanupPlugin({
      quiet: true,
    }),
  ],
}
