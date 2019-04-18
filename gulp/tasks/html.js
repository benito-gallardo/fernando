import { src, dest } from 'gulp';

// Plugins
import nunjucks from 'gulp-nunjucks-render';
import data from 'gulp-data';

// Config
import path from '../paths';
import globalData from '../helpers/data';

export const html = () => {
  return src(`${path.to.source}/pages/**/*.+(html|njk)`)
  .pipe(data(globalData))
  .pipe(nunjucks({
    path: [`${path.to.source}/templates`]
  }))
  .pipe(dest(`${path.to.destination}`));
}
