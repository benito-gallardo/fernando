import { src, dest } from 'gulp';

// Plugins
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';

// Config
import path from '../paths';

export const css = () => {
  return src(`${path.to.css.source}/**/*.scss`, { sourcemaps: true })
   .pipe(sass({
     includePaths: ['node_modules/@fortawesome/fontawesome-free/css/all.min.css']
   }).on('error',sass.logError))
   .pipe(cleanCSS())
   .pipe(dest(`${path.to.css.destination}`, { sourcemaps: '.' }))
 }