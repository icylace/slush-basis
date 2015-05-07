/**
 * Slush Basis
 * https://github.com/icylace/slush-basis
 *
 * A Slush generator for projects which use Jade, Stylus, and LiveScript.
 *
 * Copyright (c) 2014, Ron Martinez
 * Licensed under the MIT license.
 *
 * 3rd-party plugins used:
 *
 * gulp           - The streaming build system.
 * gulp-conflict  - Addresses file conflicts.
 * gulp-spawn     - Plugin to spawn a CLI program for piping with gulp. Uses spawn.
 * gulp-template  - Renders Lo-Dash templates.
 * inquirer       - A collection of common interactive command-line UIs.
 * pipe-joint     - Allows for minimal pipe notation.
 * string         - A string manipulation library.
 *
 * MAYBE?
 * gulp-load-plugins - Automatically load Gulp plugins.
 * gulp-rename       - Renames files and folders.
 * istextorbinary    - Determines if a buffer is comprised of text or binary data.
 *
 * TODO
 * - do testing with mock-gulp-dest
 *   - https://github.com/slushjs/mock-gulp-dest
 */

'use strict'

// var conflict = require('gulp-conflict');
// var del      = require('del');
var gulp     = require('gulp');
var inquirer = require('inquirer');
// var notify   = require('gulp-notify');
var path     = require('path');
var pipes    = require('pipe-joint');
// var prompt   = require('gulp-prompt');
// var rename   = require('gulp-rename');
// var runs     = require('run-sequence');
var S        = require('string');
var spawn    = require('gulp-spawn');
// var tb       = require('istextorbinary');
// var template = require('gulp-template');

// var binaryFileExtensions = [
//   '.3gp', '.bz2', '.gif', '.gz', '.jpg', '.mp3',
//   '.mpg', '.png', '.so', '.tgz', '.wav', '.zip'
// ];

// Converted from LiveScript source.
function in$(x, xs) {
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}

var isTextFile = function (f) {
  var extension = path.extname(f.name).toLowerCase();
  return in$(extension, binaryFileExtensions);
};

var getAppName = function () {
  return 'foo';
  // var appname
  // try {
  //   appname = require((path.join(process.cwd(), 'bower.json')).name);
  // } catch (e) {
  //   try {
  //     appname = require((path.join(process.cwd(), 'package.json')).name);
  //   } catch (e) {}
  // }
  // if (!appname) {
  //   appname = gulp.args.join(' ') || path.basename(process.cwd());
  // }
  // return appname.replace(/[^\w\s]+?/g, ' ');
}

var paths = {
  src: [
    // Note the use of `__dirname` to be relative to the generator.
    __dirname + '/scaffold/**',
    '!' + __dirname + '/scaffold/node_modules/',
    '!' + __dirname + '/scaffold/node_modules/**'
  ],
  dest: './'
};

var prompts = [
  {
    name:    'project_name',
    message: 'What is your project\'s name?',
    type:    'input',
    default: getAppName()
  }, {
    name:    'project_description',
    message: 'What is your project\'s description?',
    type:    'input'
  }, {
    type:    'checkbox',
    name:    'features',
    message: 'Which features would you like to include?',
    choices: {
      name:    'AngularJS',
      value:   'includeAngularJS',
      checked: true
    }
  }, {
    name:    'move_on',
    message: 'Continue?',
    type:    'confirm'
  }
];

gulp.task('default', function (done) {
  console.log(g);
  console.log(spawn);
  // inquirer.prompt(prompts, function (answers) {
  //   if (!answers.move_on) {
  //     return done();
  //   }

  //   var hasFeature = function () {
  //     return in$(it, answers.features);
  //   };

  //   var d = new Date();
  //   answers.year         = d.getFullYear();
  //   answers.created_date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  //   answers.dashed_name  = S(answers.project_name).slugify().s;
  //   answers.module_name  = S(answers.name_dashed).camelize().s;

  //   pipes([
  //     gulp.src(paths.src, { dot: true }),
  //     g.if(isTextFile, g.template(answers, {
  //       // Use only <%= name %> syntax, disabling ES6 interpolate syntax.
  //       interpolate: /<%=([\s\S]+?)%>/g
  //     })),
  //     g.conflict(paths.dest),
  //     gulp.dest(paths.dest),
  //     g.spawn({ cmd: 'npm install' })
  //     g.spawn({ cmd: 'bower install' })
  //   ]);
  //   // .on('end', done);

  //   // process.on \end !-> done()
  // });
});
