module.exports = {
  entry: './entry',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'ngtemplate-loader',
            options: {
              relativeTo: __dirname
            }
          },
          'html-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'out/bundle.js'
  }
};