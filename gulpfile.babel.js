import { src, dest, series, parallel, watch } from 'gulp';

import clean from 'gulp-clean';
//html
import render from 'gulp-nunjucks-render';
//sass
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
//images
import imagemin from 'gulp-imagemin';
//js
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

// watchers
import bsCreate from 'browser-sync';

//Paths
const dir = {
  src: 'src',
  dest: 'build',
  sass: {
    src: `src/assets/sass` ,
    dest: `build/assets/css`
  },
  js: {
    src: `src/assets/js` ,
    dest: `build/assets/js`
  },
  img: {
    src: `src/assets/images` ,
    dest: `build/assets/images`
  }
}
const browserSync = bsCreate.create();
export const nuke = () => {
  return src(`${dir.dest}`, {
    read: false,
    allowEmpty: true
  })
  .pipe(clean())
}
export const html = () => {
  return src(`${dir.src}/pages/**/*.+(html|njk)`)
  .pipe(render({
    path: [`${dir.src}/templates`]
  }))
  .pipe(dest(`${dir.dest}`))
}
export const scss = () => {
  return src(`${dir.sass.src}/**/*.scss`, { sourcemaps: true })
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS())
  .pipe(dest(`${dir.sass.dest}`, { sourcemaps: '.' }))
  .pipe(browserSync.stream());
}
export const images = () => {
  return src(`${dir.img.src}/**/*`)
  .pipe(imagemin())
  .pipe(dest(`${dir.img.dest}`))
}
export const js = () => {
  return src(`${dir.js.src}/*.js`)
  .pipe(webpackStream( require('./webpack.config') ), webpack)
  .pipe(dest(`${dir.js.dest}`))
  .pipe(browserSync.stream());
}
export const bs = (cb) => {
  browserSync.init({
    server: {
      baseDir: `${dir.dest}`
    },
    port: 8000,
    ui: false,
    tunnel: false
  });

  cb();
};
export const watchers = (cb) => {
  watch(`${dir.src}/**/*.scss`, scss);
  watch(`${dir.src}/**/*.js`, js);
  watch(`${dir.img.src}/**/*`, images);
  watch(`${dir.src}/**/*.+(html|njk)`, html).on('change', browserSync.reload);
  cb()
}
const assets = parallel(images,html,js,scss);
exports.serve = series(nuke, assets, bs, watchers);
exports.build = series(nuke, assets);