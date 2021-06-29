const path = require('path')
const cwdResolve = (dir) => path.resolve(process.cwd(), dir)
const xueyueLoaders = path.resolve(__dirname, 'xueyue-loaders')

module.exports = {
  context: process.cwd(),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: cwdResolve('dist'),
    filename: 'js/[name].[chunkhash:6].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 指定文件的扩展名,找不到会报错
    alias: {
      '@': cwdResolve('src')
    },
    fallback: {
      // webpack5中移除了nodejs核心模块的polyfill自动引入，所以需要手动引入
      assert: require.resolve('assert'),
      path: require.resolve('path-browserify')
      // util: require.resolve('util'),
      // buffer: require.resolve('buffer')
      // os: require.resolve('os-browserify/browser'),
      // crypto: require.resolve('crypto-browserify'),
      // url: require.resolve('url'),
      // stream: require.resolve('stream-browserify/'),
      // vm: require.resolve('vm-browserify')
    },
    modules: ['node_modules', 'c:/node_modules'], // 指定查找目录
    mainFields: ['browser', 'module', 'main'], // 从package.json中的哪个字段查找入口文件
    mainFiles: ['index'] // 如果找不到mainFields的话，会找索引文件，index.js
  },
  resolveLoader: {
    // loader的文件查找位置，可自定义loader
    modules: [xueyueLoaders, 'node_modules']
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 5000 * 1024,
    maxAssetSize: 5000 * 1024
  }
}
