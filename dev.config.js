module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: 'bundle.js',
        path: './lib',
        library: 'kitty-loader',
        libraryTarget: 'commonjs2',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, ]
    }
}
