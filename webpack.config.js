const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        [
                            '@babel/preset-react',
                            { 'runtime': 'automatic' }
                        ]
                    ],
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/public'),
        },
        open: true,
        compress: true,
        port: 3000,
    },
    devtool: "source-map"
}