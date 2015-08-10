
'use strict';

// ---------------------------------------------------------
// Require build process dependencies
// ---------------------------------------------------------
var gulp = require('gulp');
var config = require('./build-config');
var gUtil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var del = require('del');

// ---------------------------------------------------------
// Define tasks
// ---------------------------------------------------------


// --------------- Contiguous Integration ---------------//

gulp.task('clean', function cleanPreviousBuild (cb) {
  del(['dist']);
  cb();
});

gulp.task('copy', ['clean'], function copyMediaFiles (cb) {
  var media = [
    '!'+ config.client +'/assets/styles/**/*',
    config.client +'/**/*'
  ];
  gulp.src(media)
    .pipe(gulp.dest(config.dist));
  cb();
});

gulp.task('build', ['clean', 'copy']);

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

gulp.task('develop', ['build', 'nodemon']);

gulp.task('default', ['develop']);