const path = require("path");

module.exports = {
  entry: {
    singleSpa: "./src/single-spa.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "release"),
    libraryTarget: "amd",
    library: "reactApp"
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader?cacheDirectory"],
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  devtool: "eval-source-map"
  // devtool: 'none',
};
