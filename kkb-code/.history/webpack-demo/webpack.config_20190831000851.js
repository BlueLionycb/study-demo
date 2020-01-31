const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/1',
        admin: './src/js/2',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            { test: /\.css$/, user: 'css-loader' }
        ]
    }
}