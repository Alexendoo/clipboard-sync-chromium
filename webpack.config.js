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
      chunks: ['background', 'popup'],
    }),
    new ExtractTextPlugin('[name].css'),
  ]

  if (env && env.production) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
    )
  }

  return {
    entry: {
      background: './src/background/background.ts',
      crypto_worker: './src/crypto/worker.ts',
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
          oneOf: [
            {
              test: /worker\.ts$/,
              loader: 'ts-loader',
              options: {
                instance: 'worker',
                configFileName: './src/crypto/tsconfig.json',
                logLevel: 'warn',
              },
            },
            {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              options: {
                instance: 'app',
                logLevel: 'warn',
              },
            },
          ],
        },
        {
          test: /.(?:json|html)$/,
          loader: 'file-loader?name=[name].[ext]',
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
