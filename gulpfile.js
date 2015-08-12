
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

gulp.task('copy', [], function copyMediaFiles (cb) {
  var media = [
   // '!'+ config.client +'/assets/styles/**/*',
    config.client +'/**/*',
    'bower_components/angular/angular.min.js', 
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
  ];
  // var vendors = ['bower_components/angular/angular.min.js', 'bower_components/angular-ui-router/release/angular-ui-router.js'];

 // gulp.src(vendors,  { read: false })
 //   .pipe(gulp.dest(config.dist + '/src'));
  
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