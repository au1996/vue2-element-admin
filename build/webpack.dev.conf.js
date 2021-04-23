const { merge } = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const portfinder = require('portfinder')
const chalk = require('chalk')

const baseWebpackConfig = require('./webpack.base.conf')
const loaders = require('./loaders')
const plugins = require('./plugins')

// 获取本地IP
function getIPAdress() {
  const interfaces = require('os').networkInterfaces()
  for (let devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

const devWebpackConfigFun = env => {
  return merge(baseWebpackConfig, {
    target: 'web',
    mode: 'development',
    devtool: 'eval-source-map',
    module: loaders(env),
    plugins: plugins(env),
    devServer: {
      historyApiFallback: true,
      open: false,
      hot: true,
      quiet: true,
      host: '0.0.0.0',
      port: 7001,
      before: require('../mock/mock-server.js'),
      proxy: {
        '/api': {
          target: 'http://localhost:7001',
          changeOrigin: true, // 是否跨域
          pathRewrite: {
            '^/api': '/api'
          }
        }
      }
    }
  })
}

module.exports = env => {
  // process.env.NODE_ENV默认值是undefined 是node环境 的环境变量；跟main.js等模块内的process.env.NODE_ENV不是一个东西
  console.log('dev666', env, process.env.NODE_ENV)
  const devWebpackConfig = devWebpackConfigFun(env)
  return new Promise((resolve, reject) => {
    portfinder.basePort = devWebpackConfig.devServer.port
    portfinder
      .getPortPromise()
      .then(port => {
        devWebpackConfig.devServer.port = port

        devWebpackConfig.plugins.push(
          new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
              messages: [
                `${chalk.blueBright('webpack v5')} ${chalk.green('dev server running at:')}`,
                '',
                `> Network: ${chalk.blueBright('http://' + getIPAdress() + ':' + port)}`,
                `> Local:   ${chalk.blueBright('http://localhost:' + port)}`
              ]
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
