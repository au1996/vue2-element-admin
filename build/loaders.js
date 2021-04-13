const path = require('path')
const cwdResolve = dir => path.resolve(process.cwd(), dir)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
  return {
    //如果模块的路径匹配此正则的话，就不需要去查找里面的依赖项 require import
    noParse: /noParse.js/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: cwdResolve('src'),
        use: [
          {
            loader: 'thread-loader', // 使用多线程；通信有消耗；自行选择
            options: { workers: 3 }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true //启动babel缓存
            }
          },
          {
            loader: 'xueyue-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: env.WEBPACK_BUILD ? MiniCssExtractPlugin.loader : 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: '[name].[hash:6].[ext]',
              outputPath: 'assets/img',
              limit: 4096
            }
          }
        ]
      }
    ]
  }
}
