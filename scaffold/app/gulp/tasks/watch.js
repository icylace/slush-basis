var g        = require('gulp-load-plugins')();
var gulp     = require('gulp');
var settings = require('../gulp.json');

gulp.task(
  'watch',
  'Responds to updates for certain files.',
  function () {
    g.watch(
      settings.scripts.watch || settings.scripts.src,
      { emitOnGlob: false },
      function () {
        gulp.start('scripts');
      }
    );
    g.watch(
      settings.styles.watch || settings.styles.src,
      { emitOnGlob: false },
      function () {
        gulp.start('styles');
      }
    );
    g.watch(
      settings.templates.watch || settings.templates.src,
      { emitOnGlob: false },
      function () {
        gulp.start('templates');
      }
    );
  },
  { aliases: ['w'] }
);
