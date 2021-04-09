const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob') //文件匹配模式

module.exports = (config) => {
  const list = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue2-element-admin',
      template: path.resolve(process.cwd(), './public/index.html'),
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
  ]
  // 生产环境
  if (config.WEBPACK_BUILD) {
    const buildList = [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new OptimizeCssAssetsWebpackPlugin(),
      new PurgecssWebpackPlugin({
        paths: glob.sync(`${path.resolve(process.cwd(), 'src')}/**/*`, { nodir: true }),
      }),
    ]
    list.push(...buildList)
  }
  return list
}
