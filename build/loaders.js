const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = (config) => {
  return {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(process.cwd(), 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: config.WEBPACK_BUILD ? MiniCssExtractPlugin.loader : 'css-loader',
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
              disable: config.WEBPACK_BUILD ? true : true,
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
