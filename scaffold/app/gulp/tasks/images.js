var g        = require('gulp-load-plugins')();
var gulp     = require('gulp');
var base     = require('../helpers/base.js');
var settings = require('../gulp.json');

gulp.task(
  'images',
  'Copies and potentially compresses images before placing them for usage.',
  function () {
    return gulp.src(settings.images.src)
      .pipe(g.newer(settings.images.dest || settings.default_dest_path))
      .pipe(g.if(settings.compressing, g.imagemin({ optimizationLevel: 7 })))
      .pipe(base.placeFiles(settings.images.dest, 'Images placed.'));
  },
  { aliases: ['i'] }
);
