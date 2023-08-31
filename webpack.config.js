const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {  
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/img/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.hbs' 
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.min.css'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/static/img', to: '../images' },
            ],
        }),
    ],
};