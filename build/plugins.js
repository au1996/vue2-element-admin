const path = require('path')
const cwdResolve = (dir) => path.resolve(process.cwd(), dir)
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') //压缩CSS
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob') //文件匹配模式

module.exports = (env) => {
  const list = [
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        let error = errors[0]
        notifier.notify({
          title: 'webpack编译失败',
          message: severity + ':' + error.name,
          subtitle: error.file || '',
        })
      },
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue2-element-admin',
      template: cwdResolve('./public/index.html'),
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
    new webpack.IgnorePlugin({
      //用于忽略某些特定的模块，让 webpack 不把这些指定的模块打包进去
      resourceRegExp: /^\.\/locale$/, //资源正则
      contextRegExp: /moment$/, //上下文，目录正则
    }),
    new webpack.DefinePlugin({
      //定义在编译使用的全局变量，在浏览器运行阶段就只是值了
      xueyuexueyue: JSON.stringify(process.env.NODE_ENV),
    }),
  ]
  // 生产环境
  if (env.WEBPACK_BUILD) {
    const buildList = [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
      }),
      new OptimizeCssAssetsWebpackPlugin(), //压缩CSS
      new PurgecssWebpackPlugin({
        paths: glob.sync(`${cwdResolve('src')}/**/*`, { nodir: true }),
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled', //不启动展示打包报告的HTTP服务器
        generateStatsFile: true, //生成stats.json文件
      }),
    ]
    list.push(...buildList)
  }
  return list
}
