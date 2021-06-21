const path = require('path')
const cwdResolve = (dir) => path.resolve(process.cwd(), dir)
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (env) => {
  const pluginList = [
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        const error = errors[0]
        notifier.notify({
          title: 'webpack编译失败',
          message: severity + ':' + error.name,
          subtitle: error.file || ''
        })
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue2-element-admin',
      favicon: cwdResolve('./public/favicon.ico'),
      template: cwdResolve('./public/index.html'),
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': env.WEBPACK_BUILD ? require('./config/env.prod') : require('./config/env.dev')
    }),
    new VueLoaderPlugin(),
    new webpack.IgnorePlugin({
      // 用于忽略某些特定的模块，让 webpack 不把这些指定的模块打包进去
      resourceRegExp: /^\.\/locale$/, // 资源正则
      contextRegExp: /moment$/ // 上下文，目录正则
    })
  ]
  // 生产环境
  if (env.WEBPACK_BUILD) {
    const buildList = [
      new MiniCssExtractPlugin({
        // 提取CSS成单独的文件
        filename: 'css/[name].[chunkhash:6].css'
      }),
      new OptimizeCssAssetsWebpackPlugin(), // 压缩CSS
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled', // 不启动展示打包报告的HTTP服务器
        generateStatsFile: true // 生成stats.json文件
      })
    ]
    pluginList.push(...buildList)
  }
  return pluginList
}
