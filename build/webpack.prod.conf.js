const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const loaders = require('./loaders')
const plugins = require('./plugins')

const prodWebpackConfig = env => {
  console.log('prod666', env, process.env.NODE_ENV)
  return merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    module: loaders(env),
    plugins: plugins(env),
    optimization: {
      splitChunks: {
        chunks: 'all', //默认只分割异步模块
        minSize: 20000, //分割出去的代码块的最小体积，0表示不限制
        maxSize: 50000, //分割出去的代码块的最大体积，0表示不限制
        minRemainingSize: 0, // 代码分割后的最小保留体积,默认等于minSize webpack5新添的参数
        maxAsyncRequests: 5, //异步请求最大分割出去几个代码块
        maxInitialRequests: 3, //同步时最大分割出去几个代码块
        automaticNameDelimiter: '~', //名称的分隔符
        enforceSizeThreshold: 50000, //强制阈值 webpack5新增加的参数
        cacheGroups: {
          vendors: {
            //第三方模块
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/, //如果模块的路径匹配此正则的话
            priority: -10, //很多缓存组，如果一个模块同属于多个缓存组，应该分到哪个组里，看优先级高
            reuseExistingChunk: true //如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          }
        }
      }
    }
  })
}

module.exports = prodWebpackConfig
