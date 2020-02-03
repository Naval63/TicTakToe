'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const path = require('path');
sass.compiler = require('node-sass');

const jsSrcPath = path.resolve(__dirname, 'src/js/**/*.js');
const distPath = path.resolve(__dirname, 'dist');
const scssPath = path.resolve(__dirname, 'src/sass/**/*.scss');

gulp.task('sass', () => {
  return gulp.src(path.resolve(scssPath))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(distPath)));
});

gulp.task('sass:watch', () => gulp.watch(scssPath, gulp.parallel('sass')));

gulp.task('babel', () => gulp.src(jsSrcPath)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest(distPath))
);

gulp.task('copyhtml', () => gulp.src('./src/index.html').pipe(gulp.dest(distPath)));

gulp.task('babel:watch', () => gulp.watch(jsSrcPath, gulp.parallel('babel')));

gulp.task('watch:all', gulp.parallel('sass:watch', 'babel:watch'));

gulp.task('build', gulp.parallel('babel', 'sass', 'copyhtml'));

