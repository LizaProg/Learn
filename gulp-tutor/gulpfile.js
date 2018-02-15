'use strict';

/*2*/
/*
const gulp = require('gulp');

gulp.task('hello', function (callback) {
    console.log('Hi');
    callback();
});

gulp.task('example:promise', function () {
    return new Promise((resolve, reject) => {
        // ...
        resolve('result');
    });
});

gulp.task('example:stream', function () {
    return require('fs').createReadStream(__filename);
});

gulp.task('example:process', function () {
    return require('child_process').spawn('ls', ['node_modules'], {stdio:'inherit'})
});

gulp.task('example', gulp.series('hello', 'example:promise', 'example:stream', 'example:process'));*/


/*3*/

// const gulp = require('gulp');
//
// gulp.task('default', function () {
//     return gulp.src('source/!**!/!*.*')
//         .on('data', function (file) {
//             console.log({
//                 file: file,
//                 base: file.base,
//                 relative: file.relative
//             })
//         })
//         .pipe(gulp.dest('dest'));
//     // .pipe(gulp.dest(function (file) {
//     //     return file.extname == '.js' ? 'js' :
//     //         file.extname == '.css' ? 'css' : 'source';
//     // }))
// });


/*4*/
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


gulp.task('styles', function () {
    /*return gulp.src('frontend/styles/!**!/!*.styl')
        .pipe(debug({title: 'src'}))
        /!*перевести .styl в .css*!/
        .pipe(stylus())
        /!*объединить все файлы .css в 1 файл*!/
        .pipe(debug({title: 'stylus'}))
        .pipe(concat('all.css'))
        .pipe(debug({title: 'concat'}))
        .pipe(gulp.dest('public'));*/

    //в 1 файл main.css
    /* return gulp.src('frontend/styles/main.styl')
         .pipe(sourcemaps.init())
         .pipe(stylus())
         .pipe(sourcemaps.write())
         .pipe(gulp.dest('public'));*/

    /*let pipeline = gulp.src('frontend/styles/main.styl');

    if(isDevelopment){
        pipeline = pipeline.pipe(sourcemaps.init());
    }

    pipeline = pipeline
        .pipe(stylus());

     if(isDevelopment){
         pipeline = pipeline.pipe(sourcemaps.write());
     }

     return pipeline
         .pipe(gulp.dest('public'));*/

    return gulp.src('frontend/styles/main.styl')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(stylus())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public'));
});

gulp.task('clean', function () {
    return del('public');
});

gulp.task('assets', function () {
    return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
        .pipe(debug({title: 'assets'}))
        .pipe(gulp.dest('public'))
});


gulp.task('bulid', gulp.series('clean', gulp.parallel('styles', 'assets')));

/*5*/

gulp.task('watch', function () {
    gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});

gulp.task('dev', gulp.series('bulid', 'watch'));


























