var gulp = require('gulp')
var runs = require('run-sequence')

gulp.task(
  'assets',
  'Assembles the assets.',
  function () {
    return runs(['fonts', 'images'])
  },
  { aliases: ['a'] }
)
