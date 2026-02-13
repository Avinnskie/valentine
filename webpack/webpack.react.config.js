const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(process.cwd(), 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // biar build lebih cepat tanpa HappyPack
          },
        },
      },
    ],
  },
};
