const path = require('path');
const root = path.dirname(__dirname);
const source = `${root}/src`;
const base = `${root}/build`;

module.exports = {
  to: {
    root,
    source,
    destination: base,
    css: {
      source: `${root}/src/assets/css`,
      destination: `${base}/assets/css`
    },
    js: {
      source: `${root}/src/assets/js`,
      destination: `${base}/assets/js`
    },
    img: {
      source: `${root}/src/assets/images`,
      destination: `${base}/assets/images`
    }
  }
};