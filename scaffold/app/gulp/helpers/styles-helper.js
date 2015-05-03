var g    = require('gulp-load-plugins')();
var lazy = require('lazypipe');

var lint_styles = lazy()
  .pipe(g.csslint, '.csslintrc')
  .pipe(g.csslint.reporter);

var minify_styles = lazy()
  .pipe(g.csso)
  .pipe(g.rename, { suffix: '.min' });
  // .pipe(g.pleeease)

module.exports = {
  lint:   lint_styles,
  minify: minify_styles,
};
