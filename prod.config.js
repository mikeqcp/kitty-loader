module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: 'index.js',
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
    },
    externals: {
        "image-size": {
            commonjs2: "image-size"
        }
    }
};
