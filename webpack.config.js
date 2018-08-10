// 1. Define entry and output using module.exports(it's a node thing. webpack.config.js is a node file)

// The path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      // __dirname is the file(which in this case is webpack.config.js)'s current location.
      // For more info on path, see section 6 video #50.
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          // This is a regex to check all files that ends with .js.
          // For more info on this, see section 6 video #54.
          exclude: /node_modules/
          // Exclude is as it says, excludes any file we don't want to check.
        },
        {
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          }),
          // 'loader' is used when we want to load only one loader.
          // 'use' is used when we want to load multiple loaders.
          test: /\.s?css$/
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    // This is to setup webpack's equivalent of byebug. !Very important.
    devServer: {
      contentBase: path.join(__dirname, "public")
    }
    // For more info on devServer see Section 6 video #57.
  };
};

// See documentation for more on webpack on www.webpack.js.org(under documentation tab)
