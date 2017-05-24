const path = require('path')

module.exports = {
  entry: "./src/main.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".ts", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /.json$/,
        loader: "file-loader",
        query: {
          name: "[name].[ext]",
        },
      }
    ],
  },

  devtool: "source-map",
}