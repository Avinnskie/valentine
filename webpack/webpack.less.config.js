const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDebug = process.env.NODE_ENV !== 'production';

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: isDebug,
    modules: true,
    localIdentName: '[local]',
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      // ini menggantikan "config: { path: __dirname }" yang sudah lama
      // kalau kamu punya postcss.config.js di folder ini, otomatis kebaca.
    },
  },
};

const lessLoader = {
  loader: 'less-loader',
  options: {
    sourceMap: isDebug,
    javascriptEnabled: true,
  },
};

const lessConfig = {
  module: {
    rules: [
      // LESS
      {
        test: /\.less$/,
        use: [
          isDebug ? 'style-loader' : MiniCssExtractPlugin.loader,
          cssLoader,
          postcssLoader,
          lessLoader,
        ],
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          isDebug ? 'style-loader' : MiniCssExtractPlugin.loader,
          cssLoader,
          postcssLoader,
        ],
      },
    ],
  },

  plugins: [
    ...(isDebug
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
        ]),
  ],

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
    ],
  },
};

module.exports = lessConfig;
