var g    = require('gulp-load-plugins')()
var lazy = require('lazypipe')

// NOTE
// - Used partly because of current limitation with `gulp-jshint`
//   in relation to `gulp-if`.
var lint_scripts = lazy()
  .pipe(g.jshint)
  .pipe(g.jshint.reporter, 'jshint-stylish-ex')

var minify_scripts = lazy()
  // .pipe(g.ngAnnotate)
  .pipe(g.uglify)
  .pipe(g.rename, { suffix: '.min' })

module.exports = {
  lint:   lint_scripts,
  minify: minify_scripts,
}
