const { merge } = require('webpack-merge')
const portfinder = require('portfinder')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

const baseWebpackConfig = require('./webpack.base.conf')
const loaders = require('./loaders')
const plugins = require('./plugins')

const devWebpackConfigFun = env => {
  return merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    module: loaders(env),
    plugins: plugins(env),
    devServer: {
      historyApiFallback: true,
      open: false,
      hot: true,
      quiet: true,
      port: 7001
    }
  })
}

// module.exports = devWebpackConfig
module.exports = env => {
  console.log('dev666', env, process.env.NODE_ENV)
  const devWebpackConfig = devWebpackConfigFun(env)
  return new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || devWebpackConfig.devServer.port
    portfinder
      .getPortPromise()
      .then(port => {
        process.env.PORT = port
        devWebpackConfig.devServer.port = port

        devWebpackConfig.plugins.push(
          new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
              messages: [`Your application is running here: http://localhost:${port}`]
            },
            onErrors: (severity, errors) => {
              let error = errors[0]
              notifier.notify({
                title: 'webpack编译失败',
                message: severity + ':' + error.name,
                subtitle: error.file || ''
              })
            }
          })
        )

        resolve(devWebpackConfig)
      })
      .catch(err => {
        reject(err)
      })
  })
}
