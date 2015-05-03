var browserSync = require('browser-sync');
var g           = require('gulp-load-plugins')();
var gulp        = require('gulp');
var settings    = require('../gulp.json');

var placeFiles = function (dest, message) {
  message = message || 'Done';
  // TODO:
  // - use multipipe or something else
  return g.util.pipeline([
    g.if(settings.compressing, g.gzip({ level: 9, memLevel: 9 })),
    g.size({ showFiles: true }),
    gulp.dest(dest || settings.default_dest),
    g.if(settings.notifying, g.notify(message)),
    g.if(settings.syncing, browserSync.reload({ stream: true }))
  ]);
}

module.exports = {
  settings: {
    compressing: settings.compressing,
    linting:     settings.linting,
    minifying:   settings.minifying,
    notifying:   settings.notifying,
    syncing:     settings.syncing
  },
  placeFiles:  placeFiles
};
