'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.parallel('sass'));
});

const gulp = require('gulp');
const babel = require('gulp-babel');
const jsSrcPath = 'src/js/**/*.js';
 
gulp.task('babel', () =>
    gulp.src(jsSrcPath)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist'))
);
gulp.task('babel:watch', function () {
    gulp.watch(jsSrcPath, gulp.series('babel'));
});