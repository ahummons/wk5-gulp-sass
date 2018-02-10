'use strict';

//load gulp and gulp-sass but give them convenient names
var gulp = require('gulp');
var sass = require('gulp-sass');

//define a task to read your sass files and make css
gulp.task('sass', function () {
  return gulp.src('*./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
})
//watch task is a convience, it will rebuild your css anytime you update a sass file
gulp.task('watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});

//default task will run when you type `gulp` at the command line
gulp.task('default', ['watch']);
