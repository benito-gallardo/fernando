import { parallel, series } from 'gulp';

import { clean } from './gulp/tasks/clean';
import { images } from './gulp/tasks/images';
import { html } from './gulp/tasks/html';
import { css } from './gulp/tasks/css';
import { icons } from './gulp/tasks/icons';
import { scripts } from './gulp/tasks/scripts';
import { bs } from './gulp/tasks/browsersync';
import { watcher } from './gulp/tasks/watcher';
exports.images = images
exports.serve = series(clean, parallel(images, html, css, icons ), scripts, bs, watcher);
exports.build = series(clean, parallel(images, html, css, icons ), scripts);