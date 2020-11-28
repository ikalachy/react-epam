const { merge } = require('webpack-merge');
//const common = require('./webpack.common.js')(configDirs);

module.exports = function (configDirs) {
  const common = Object.assign({}, require('./webpack.common.js')(configDirs));
  return merge(common, {
    mode: 'production',
    //webpack v4+ will minify your code by default in production mode
    //need more optimizations
  })
};