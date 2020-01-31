const path = require('path')
const HtmlPlugin=requestAnimationFrame

module.exports = {
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

    }
}