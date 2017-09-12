"use strict";

const path = require('path');
const webpack = require("webpack");

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {       
        loaders: [
            {
               test: /.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                  presets: ['react', 'es2015', 'stage-0'],
                  plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           "window.jQuery": "jquery'",
           "window.$": "jquery"
       })
    ],
    devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8600, 
        open: true
    }
};
