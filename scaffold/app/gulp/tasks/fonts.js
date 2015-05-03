var g        = require('gulp-load-plugins')();
var gulp     = require('gulp');
var base     = require('../helpers/base.js');
var settings = require('../gulp.json');

gulp.task(
  'fonts',
  'Copies the fonts over to where they\'ll be used.',
  function () {
    return gulp.src(settings.fonts.src)
      .pipe(g.newer(settings.fonts.dest || settings.default_dest_path))
      .pipe(base.placeFiles(settings.fonts.dest, 'Fonts placed.'));
  },
  { aliases: ['f'] }
);