'use strict';

const gulp = require('gulp');

/**
 * Execute the whole build process.
 */
gulp.task('build',
  gulp.series(
    'clean',
    'earth-coastlines'
  )
);
