'use strict';

var gulp = require('gulp');

gulp.task('watch', ['injector:js'] ,function () {
  gulp.watch('./static/javascrips/**/*.js', ['injector:js']);
});
