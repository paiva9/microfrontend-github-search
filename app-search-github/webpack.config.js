const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "src/single-spa.js"
  },
  output: {
    publicPath: "",
    filename: "[name].js",
    path: path.resolve(__dirname, "release")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules", ".scss"]
  },
  plugins: [
    CopyWebpackPlugin([
      { from: path.resolve(__dirname, "src/index.html") },
      { from: path.resolve(__dirname, "libs/system.js") }
    ]),
    new CleanWebpackPlugin(["release"])
  ],
  devtool: "source-map",
  externals: [],
  mode: "development",
  devServer: {
    contentBase: "./release",
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    proxy: {
      "/search/repositories": {
        target: "http://localhost:9001",
        pathRewrite: { "^/search/repositories": "" }
      },
      "/search/users": {
        target: "http://localhost:9002",
        pathRewrite: { "^/search/users": "" }
      },
      "/app-sidebar": {
        target: "http://localhost:9004",
        pathRewrite: { "^/app-sidebar": "" }
      }
    }
  }
};
