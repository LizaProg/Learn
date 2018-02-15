const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('css', function () {
    gulp.src('./src/precss/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('./src/precss/**/*.css', ['css'])
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
});