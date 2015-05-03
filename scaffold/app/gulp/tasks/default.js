var gulp = require('gulp');
var runs = require('run-sequence');

gulp.task(
  'default',
  'Builds the project and initiates watching with browser sync.',
  function () {
    return runs('build', 'init-sync', 'watch');
  }
);
