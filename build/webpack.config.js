const path = require('path')
const cwdResolve = (dir) => path.resolve(process.cwd(), dir)

const loaders = require('./loaders')
const plugins = require('./plugins')
const xueyueLoader = path.resolve(__dirname, 'xueyueLoader')

module.exports = (env = {}) => {
  // process.env.NODE_ENV 默认值是undefined node环境的环境变量 跟 main.js等编译环境内的文件里面的process.env.NODE_ENV不是一个东西
  console.log(666, env, process.env.NODE_ENV)
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'hidden-source-map' : 'eval-source-map',
    context: process.cwd(),
    entry: {
      app: './src/main.js',
    },
    output: {
      path: cwdResolve('dist'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.vue', '.js', '.jsx', '.json'], //指定文件的扩展名,找不到会报错
      alias: {
        '@': cwdResolve('src'),
      },
      modules: ['node_modules', 'c:/node_modules'], //指定查找目录
      mainFields: ['browser', 'module', 'main'], //从package.json中的哪个字段查找入口文件
      mainFiles: ['index'], //如果找不到mainFields的话，会找索引文件，index.js
    },
    resolveLoader: {
      // loader的文件查找位置，可自定义loader
      modules: [xueyueLoader, 'node_modules'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: cwdResolve('dist'),
      open: false,
      hot: true,
      quiet: true,
      port: 7001,
    },
    module: loaders(env),
    plugins: plugins(env),
  }
}
