import { src, dest } from 'gulp';

// Plugins
import imagemin from 'gulp-imagemin';

// Config
import path from '../paths';

export const images = () => {
  return src(`${path.to.img.source}/**/*`)
  .pipe(imagemin())
  .pipe(dest(`${path.to.img.destination}`))
}
