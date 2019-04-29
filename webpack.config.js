module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['@babel/preset-env', { modules: false }],
          ],
        },
      },
    ],
  },
};