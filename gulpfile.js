const gulp = require('gulp');
const rename = require('gulp-rename');
const babel = require("gulp-babel");
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config.demo.prod.js');
// demo
// removes the output configuration from the webpack.config.js file, otherwise it doesn't work.
webpackConfig.output.path = null;

const destinationFolder = './build'

gulp.task('copy-index', function () {
    return gulp.src('./src/index.prod.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('copy-cv', function () {
    return gulp.src('./cv/cv.pdf')
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('copy-favicon', function () {
    return gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('copy-cname', function () {
    return gulp.src('./CNAME')
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('build', ['copy-index', 'copy-cv', 'copy-cname', 'copy-favicon'], function () {
    return gulp.src("./src/client.js")
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(destinationFolder));
});
