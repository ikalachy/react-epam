var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
    BUILD_DIR: BUILD_DIR,
    APP_DIR: APP_DIR
}


function buildConfig(env) {
    if (env.dev === true) {
        return require('./config/webpack.dev.js')(configDirs);
    } else if (env.prod === true) {
        return require('./config/webpack.prod.js')(configDirs);
    }
    else {
        console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
    }
}

module.exports = buildConfig;