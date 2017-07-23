const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.resolve('./public/script'),
    devtool: "source-map",
    entry: "./index.ts",
    output: {
        path: path.resolve('./build'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + info.absoluteResourcePath;
        }
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [path.resolve('./public'), 'node_modules']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    devServer: {
        inline:true,
        port: 1111
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Typescript Webpack Starter',
            template: '!!ejs-loader!public/index.html'
        }),
    ]
}