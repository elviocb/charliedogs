
'use strict';

// ---------------------------------------------------------
// Require build process dependencies
// ---------------------------------------------------------
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// ---------------------------------------------------------
// Define tasks
// ---------------------------------------------------------

gulp.task('nodemon', [], function runNodemon (cb) {
  var isActive = false;
  return nodemon({
    script: 'server' + '/server.js',
    watch: ['server' + '/**/*.js']
  })
    .on('start', function onStart() {
      gUtil.log('runNodemon:\tstarting up...');
      if (!isActive) {
        isActive = true;
        cb();
      }
    });

});

gulp.task('develop', ['nodemon']);

gulp.task('default', ['develop']);