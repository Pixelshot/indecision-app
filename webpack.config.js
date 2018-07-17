// 1. Define entry and output using module.exports(it's a node thing. webpack.config.js is a node file)

// The path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), 
        // For more info on path, see section 6 video #50.
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, 
            // This is a regex to check all files that ends with .js.
            // For more info on this, see section 6 video #54.
            exclude: /node_modules/
            // Exclude is as it says, excludes any file we don't want to check.
        }, {
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            // 'loader' is used when we want to load only one loader.
            // 'use' is used when we want to load multiple loaders.
            ], 
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    // This is to setup webpack's equivalent of byebug. !Very important.
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
    // For more info on devServer see Section 6 video #57.
}

// See documentation for more on webpack on www.webpack.js.org(under documentation tab)