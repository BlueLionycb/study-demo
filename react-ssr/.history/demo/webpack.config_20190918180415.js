const path = require('path')
const HtmlPlugin=require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry: path.join(__dirname, "src/client/index.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]

    },
    plugins:[
        new HtmlPlugin({
            template:path.join(__dirname, "src/client/index.html")
        })
    ],
    dev

}