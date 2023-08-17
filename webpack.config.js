const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: '/js/functions.js', // Adjust this to your entry file
    output: {
        filename: 'functions.min.js', // Adjust the output filename
        path: __dirname + '/js' // Adjust the output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_fnames: true // This option keeps function names intact during minification
                }
            })
        ]
    }
};
