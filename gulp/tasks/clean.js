import { src } from 'gulp';

// Plugins
import del from 'gulp-clean';

// Config
import path from '../paths';

export const clean = () => {
  return src(`${path.to.destination}/`, { allowEmpty: true })
  .pipe(del());
}