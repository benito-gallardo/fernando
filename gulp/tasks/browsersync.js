import { create as bsCreate} from 'browser-sync';

// Config
import path from '../paths';

export const browserSync = bsCreate();

export const bs = (cb) => {
  browserSync.init({
    server: {
      baseDir: `${path.to.destination}`
    },
    port:8000,
    ui: false
  });
  cb()
}
