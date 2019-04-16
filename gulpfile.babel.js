import { src, dest, watch, parallel, series } from 'gulp';
import fs from 'fs';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import { create as bsCreate} from 'browser-sync';
import nunjucks from 'gulp-nunjucks-render';
import data from 'gulp-data';
import globalData from './src/data.json';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
const browserSync = bsCreate();
const clean = (cb) => {

  cb();
}
const bs = () => {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    port:8000,
    ui: false
  });
  
}
const test = (cb) => {
  var bundler = browserify('src/assets/js/main.js');
    bundler.transform(babelify);
    bundler.bundle()
      .on('error', function (err) { console.error(err); })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(dest('build/assets/js/'));
    cb();
}
const css = (cb) => {
  src('src/assets/css/**/*.scss', { sourcemaps: true })
  .pipe(sass({
    includePaths: ['node_modules/@fortawesome/fontawesome-free/css/all.min.css']
  }).on('error',sass.logError))
  .pipe(dest('build/assets/css', { sourcemaps: '.' }))
  .pipe(browserSync.stream({match: '**/*.css'}));
  cb();
}
const icons = (cb) => {
  src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
  .pipe(dest('build/assets/webfonts/'));
  cb();
}
const js = (cb) => {
  src('src/assets/js/**/*.js', { sourcemaps: true })
  .pipe(browserify())
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(dest('build/assets/js', { sourcemaps: '.' }))
  .pipe(browserSync.stream({match: '**/*.js'}));
  cb();
}
const html = (cb) => {
  src('src/pages/**/*.+(html|njk)')
  .pipe(data(globalData))
  .pipe(nunjucks({
    path: ['src/templates']
  }))
  .pipe(dest('build'))
  .pipe(browserSync.stream());
  cb();
}
watch(['src/**/*.+(html|njk)'], series(clean, html));
watch(['src/**/*.scss'], css);
watch(['src/**/*.js'], js);
//exports.sass = sass
exports.test = test;
exports.css = css;
exports.icons = icons
exports.html = html;
exports.js = js;
exports.bs = bs;
exports.build = series(clean, parallel(html,css,icons,test), bs);