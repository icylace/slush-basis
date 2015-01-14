var g        = require('gulp-load-plugins')()
var gulp     = require('gulp')
var lazy     = require('lazypipe')
var nib      = require('nib')
var base     = require('../helpers/base.js')
var helper   = require('../helpers/styles-helper.js')
var settings = require('../gulp.json')

gulp.task(
  'vendor-styles',
  'Assembles 3rd-party styles.',
  function () {
    gulp.src(settings.vendor_styles.src)
      .pipe(g.concat('vendor.css'))
      .pipe(g.if(settings.minifying, helper.minify()))
      .pipe(base.placeFiles(settings.vendor_styles.dest, 'Vendor styles assembled.'))
  },
  { aliases: ['vcss'] }
)
