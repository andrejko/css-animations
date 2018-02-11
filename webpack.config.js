const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.sass$/,
                use: ['css-loader', 'sass-loader?indentedSyntax'],
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'app.bundle.css' }),
    ],
};