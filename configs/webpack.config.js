const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpack = require('dotenv-webpack');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve(__dirname, '../src', 'index.js'),
    },
    output: {
        file: path.resolve(__dirname, '../dist/build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['js', 'jsx'],
    },
    plugins: [
        new DotenvWebpack(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(css|scss)$/,
                exclude: [/node_modules/, '/src/testCSS/'],
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    devServer: {
		port: 4000,
		inline: true,
		overlay: true,
		historyApiFallback: true,
		hot: true,
		open: true,
		compress: true,
		contentBase: path.join(__dirname, 'public'),
	},
}