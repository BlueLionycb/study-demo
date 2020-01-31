const path = require('path')

module.exports = {
    entry: path.join(__dirname, "demo/src/client/index.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'demodist')
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