var browserSync = require('browser-sync')
var gulp        = require('gulp')
var settings    = require('../gulp.json')

gulp.task(
  'init-sync',
  'Activates live browser reloading.',
  function () {
    // settings.syncing = true
    browserSync.init(null, {
      browser: 'google chrome',
      minify:  false,
      proxy:   settings.project_url
      // host:    '10.0.0.1'
    })
  },
  { aliases: ['s'] }
)
