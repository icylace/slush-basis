var gulp = require('gulp')
var runs = require('run-sequence')

gulp.task(
  'build',
  'Freshly creates the output files and folders.',
  function () {
    return runs('clean', ['assets', 'templates', 'scripts', 'styles', 'vendor-scripts', 'vendor-styles'])
  },
  { aliases: ['b'] }
)
