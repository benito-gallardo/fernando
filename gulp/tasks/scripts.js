import { series, src, dest } from 'gulp';

// Plugins
import bable from 'gulp-babel';
import { readdirSync } from 'fs';
import named from 'vinyl-named';
import webpackStream from 'webpack-stream';

// Config
import path from '../paths';

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
 
  },
  output: {
      path: `${path.to.destination}`,
      filename: '[name].js'
  },
  resolve: {
    alias: {
      //'vue$': 'vue/dist/vue.esm.js',
      vue: 'vue/dist/vue.js'
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
    if (!directory.includes('.js')) return
    console.log(directory)
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
const newJs = () => {
  return src([
    'node_modules/babel-polyfill/dist/polyfill.js',
    `${path.to.js.source}/**/*.js`
  ])
  .pipe(bable({
    presets: [['@babel/preset-env']]
  }))
  .pipe(dest(`${path.to.js.destination}`));
}

export const scripts = series(
  js,
  webpackjs
  //newJs
)
