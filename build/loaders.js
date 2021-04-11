const path = require('path')
const cwdResolve = (dir) => path.resolve(process.cwd(), dir)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  return {
    //如果模块的路径匹配此正则的话，就不需要去查找里面的依赖项 require import
    noParse: /noParse.js/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: cwdResolve('src'),
        use: [
          {
            loader: 'thread-loader', // 开启线程池；通信有消耗；自行选择
            options: { workers: 3 },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true, //启动babel缓存
            },
          },
          {
            loader: 'xueyue-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: env.WEBPACK_BUILD ? MiniCssExtractPlugin.loader : 'css-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: '[name].[hash:4].[ext]',
              outputPath: 'assets/img',
              limit: 4096,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: env.WEBPACK_BUILD ? true : true,
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: 80,
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  }
}
