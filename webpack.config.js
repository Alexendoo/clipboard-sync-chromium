// @ts-check

const path = require('path')
const rimraf = require('rimraf')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function(env) {
  rimraf.sync('dist')

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),
    new ExtractTextPlugin('[name].css'),
  ]

  if (env && env.production) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    )
  }

  return {
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
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader',
          }),
        },
      ],
    },

    plugins,

    devtool: 'source-map',
  }
}
