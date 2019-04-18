import { series, src, dest } from 'gulp';

// Plugins

import { readdirSync } from 'fs';
import named from 'vinyl-named';
import webpackStream from 'webpack-stream';

// Config
import path from '../paths';

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {}
  ,
  output: {
      path: `${path.to.destination}`,
      filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
      }]
  },
  
};
const js = (cb) => {
  readdirSync(`${path.to.js.source}`)
  .forEach( directory => {
    const key = directory.replace('.js','');
    webpackConfig.entry[key] = `${path.to.js.source}/${directory}`
  });
  cb();
}

const webpackjs = () => {
  return src(`${path.to.js.source}/index.js`)
    .pipe(named())
    .pipe(webpackStream(webpackConfig))
    .pipe(dest(`${path.to.js.destination}`))
}


export const scripts = series(
  js,
  webpackjs
)
