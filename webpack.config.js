const path = require('path')
const loaders = require('./build/loaders')
const plugins = require('./build/plugins')

module.exports = (config) => {
  console.log(666, config, process.env.NODE_ENV)
  return {
    mode: config.WEBPACK_BUILD ? 'production' : 'development',
    devtool: config.WEBPACK_BUILD ? false : 'source-map',
    entry: {
      app: './src/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist'),
      open: false,
      hot: true,
      quiet: true,
      port: 7001,
    },
    module: loaders(config),
    plugins: plugins(config),
  }
}
