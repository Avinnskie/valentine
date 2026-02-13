module.exports = {
  plugins: () => {
    return [
      require('postcss-nested')(), // Untuk mengurai aturan CSS seperti @media, @supports, @font-face, dan @document
      require('pixrem')(), // Tambahkan konversi piksel untuk unit rem
      require('autoprefixer')({ // Tambahkan prefix vendor
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']
      }),
      require('postcss-flexibility')(), // Tambahkan polyfill layout flex
      require('postcss-discard-duplicates')() // Hapus aturan duplikat di CSS
    ]
  }
}