var g    = require('gulp-load-plugins')();
var lazy = require('lazypipe');

var lintStyles = lazy()
  .pipe(g.csslint, '.csslintrc')
  .pipe(g.csslint.reporter);

var minifyStyles = lazy()
  .pipe(g.csso)
  .pipe(g.rename, { suffix: '.min' });
  // .pipe(g.pleeease)

module.exports = {
  lint:   lintStyles,
  minify: minifyStyles,
};
