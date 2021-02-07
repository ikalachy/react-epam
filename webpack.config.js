const path = require('path');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

//import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const common = {
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader', // Or `url-loader` or your other loader
                    },
                ],
            },

        ]
    },
    plugins: [
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ['optipng', { optimizationLevel: 5 }],
                ],
            },
        }),
        
        new LoadablePlugin()
    ],


}


const clientConfig = {
    ...common,

    mode: 'development',

    name: 'client',
    target: 'web',

    entry: {
        client: [
            '@babel/polyfill',
            './src/js/client.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },

    devtool: 'cheap-module-source-map',

};

const serverConfig = {
    ...common,

    mode: 'development',

    name: 'server',
    target: 'node',
    externals: [nodeExternals()],

    entry: {
        server: ['@babel/polyfill', path.resolve(__dirname, 'src/js', 'server.js')],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js',
    },

    devtool: 'cheap-module-source-map',
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },



};

module.exports = [clientConfig];