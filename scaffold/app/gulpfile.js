var g    = require('gulp-load-plugins')()
var gulp = require('gulp')

// Enable tasks to be run in given sequence from the command-line.
g.adhoc(gulp, g.util.env)

// Enable the help text task.
g.help(gulp, { aliases: ['h'] })

// Load up our custom tasks.
require('require-dir')('./gulp/tasks', { recurse: true })
