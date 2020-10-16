const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve(__dirname, '../src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist/build'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
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
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                },
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
                exclude: "/node_modules",
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'sass-loader' }
                ]
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
        compress: true
    },
}