const { merge } = require('webpack-merge');

module.exports = function (configDirs) {
  const common = Object.assign({}, require('./webpack.common.js')(configDirs));
  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    },
  })
};