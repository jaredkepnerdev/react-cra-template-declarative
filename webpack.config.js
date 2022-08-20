const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./template/src/index.tsx"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
          tsconfigRaw: require('./tsconfig.json')
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./template/public"),
    },
    compress: false,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./template/public", "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: './tsconfig.json',
      },
    }),
  ],
};
