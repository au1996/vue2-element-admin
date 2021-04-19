const path = require('path')
const cwdResolve = dir => path.resolve(process.cwd(), dir)
const xueyueLoader = path.resolve(__dirname, 'xueyueLoader')

module.exports = {
  context: process.cwd(),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: cwdResolve('dist'),
    filename: '[name].[chunkhash:6].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], //指定文件的扩展名,找不到会报错
    fallback: {
      //webpack5中移除了nodejs核心模块的polyfill自动引入，所以需要手动引入
      path: require.resolve('path-browserify')
      // crypto: require.resolve('crypto-browserify'),
      // url: require.resolve('url'),
      // buffer: require.resolve('buffer/'),
      // util: require.resolve('util/'),
      // stream: require.resolve('stream-browserify/'),
      // vm: require.resolve('vm-browserify')
    },
    alias: {
      '@': cwdResolve('src')
    },
    modules: ['node_modules', 'c:/node_modules'], //指定查找目录
    mainFields: ['browser', 'module', 'main'], //从package.json中的哪个字段查找入口文件
    mainFiles: ['index'] //如果找不到mainFields的话，会找索引文件，index.js
  },
  resolveLoader: {
    // loader的文件查找位置，可自定义loader
    modules: [xueyueLoader, 'node_modules']
  }
}
