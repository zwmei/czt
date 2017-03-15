'use strict';

process.env.NODE_ENV = 'test';

var gulp = require('gulp');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var replaceTemplate = require('gulp-replace-template');
var async = require('async');


function renderCss(callback) {
  gulp.src(['./site_main/less/*.less'])
    .pipe(concat('czt.css'))
    .pipe(less())
    .pipe(gulp.dest('./site_main/dist'))
    .on('finish', callback);
}

function renderJs(callback) {
  gulp.src(['./site_main/**/*.js'])
    .pipe(concat('czt.js'))
    .pipe(gulp.dest('./site_main/dist'))
    .on('finish', callback);
}

gulp.task('d', function () {
  async.auto({
    renderCss: function (autoCallback) {
      renderCss(autoCallback);
    },
    renderJs: function (autoCallback) {
      renderJs(autoCallback);
    }
  }, function (err, result) {
    console.log('gulp finished');
  });
});