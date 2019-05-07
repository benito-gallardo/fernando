const webpack = require('webpack');
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
  // resolve: {
  //   alias: {
  //     $: 'jquery/dist/jquery.js',
  //     jQuery: 'jquery/dist/jquery.js',
  //     vue: 'vue/dist/vue.js'
  //   }
  // }
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: "jquery",  
  //     jQuery: "jquery" 
  //   })
  // ],
};