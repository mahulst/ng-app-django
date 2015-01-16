'use strict';

var gulp = require('gulp');
var inject = require("gulp-inject");
var angularFilesort = require('gulp-angular-filesort');



gulp.task('injector:js', function () {
  gulp.src('./templates/javascripts.html')
    .pipe(inject(
      gulp.src(['./static/javascripts/**/*.js']).pipe(angularFilesort())
    ))
    .pipe(gulp.dest('./templates'));
});

