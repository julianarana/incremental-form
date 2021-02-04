var path = require('path');
var BASE_DIR = path.resolve(__dirname, './src/');
var APP_DIR = path.resolve(__dirname, './src/components/src');
var BUILD_DIR = path.resolve(__dirname, './dist');
const configDirs = {
  APP_DIR: APP_DIR,
  BASE_DIR: BASE_DIR,
  BUILD_DIR: BUILD_DIR,
};

function buildConfig(env) {
  console.log("ENV", env)
  if (env === 'dev' || env === 'prod') {
    return require('./config/webpack/webpack.' + env + '.config.js');
  } else {
    return require('./config/webpack/webpack.dev.config.js');
  }
}
module.exports = buildConfig;
