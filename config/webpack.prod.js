const { merge } = require('webpack-merge');
//const common = require('./webpack.common.js')(configDirs);

module.exports = function (configDirs) {
  const common = Object.assign({}, require('./webpack.common.js')(configDirs));
  return merge(common, {
    entry: './src/js/server.js',
       // output files and chunks
       output: {
        filename: "[name].js",
        chunkFilename: '[id].[hash:8].js'
    },
    mode: 'production',
       // webpack optimizations
       optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                
                vendor: {
                    chunks: 'all', // both : consider sync + async chunks for evaluation
                    name: 'vendor', // name of chunk file
                    test: /node_modules/, // test regular expression
                }
            }
        }
    },
    //webpack v4+ will minify your code by default in production mode
    //need more optimizations
  })
};