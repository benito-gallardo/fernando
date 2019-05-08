require('dotenv').config();
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
  plugins: [
    new webpack.DefinePlugin({
      LAMBDA_ENDPOINT: JSON.stringify(process.env.LAMBDA_ENDPOINT),
      STRIPE_PUBLISHABLE_KEY: JSON.stringify(process.env.STRIPE_PUBLISHABLE_KEY),
    })
  ]
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