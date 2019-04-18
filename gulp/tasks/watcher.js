
import path from '../paths';
import { watch } from 'gulp';
import { html } from './html';
import { css } from './css';
import { scripts } from './scripts';
import { browserSync } from './browsersync';

export const watcher = (cb) => {
  watch([`${path.to.source}/**/*.+(html|njk)`],html);
  watch([`${path.to.js.source}/**/*.js`], scripts);
  watch([`${path.to.css.source}/**/*.scss`], css);
  watch([
    `${path.to.css.destination}/**/*.css`, 
    `${path.to.js.destination}/**/*.js`, 
    `${path.to.destination}/**/*.html`])
    .on('change', browserSync.reload);
  cb();
}