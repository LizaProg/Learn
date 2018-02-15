const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

const gcmq = require('gulp-group-css-media-queries');
/*const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');*/
const less = require('gulp-less');

const config = {
    root: './src/',
    css: {
        src: 'precss/styles.less',
        dest: 'css',
        watch: 'precss/**/*.less'
    },
    html: 'index.html'
};

gulp.task('css', function () {
    gulp.src(config.root + config.css.src)
        .pipe(less())
        .pipe(gcmq())
        /*.pipe(sourcemaps.write('.'))*/
        .pipe(gulp.dest(config.root + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.root + config.css.watch, ['css']);
    /* отслеживать index.html */
    gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.root
        }
    });
});