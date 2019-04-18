import { src, dest } from 'gulp';

// Config
import path from '../paths';

export const icons = (cb) => {
  src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
  .pipe(dest(`${path.to.destination}/assets/webfonts/`));
  cb();
}