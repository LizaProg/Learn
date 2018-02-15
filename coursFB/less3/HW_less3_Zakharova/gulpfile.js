const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const gcmq = require('gulp-group-css-media-queries');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

const config = {
    root: './src/',
    css: {
        src: 'precss/**/*.css',
        dest: 'css'
    }
};

gulp.task('css', function () {
    gulp.src(config.root + config.css.src)
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.root + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/*группировка media*/
gulp.task('css-group', function () {
    gulp.src('src/precss/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest('src/precss'));
});

/*rename - сделать styles.min.css*/
gulp.task('css-min', function () {
    return gulp.src('src/precss/styles.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('src/css')); // Выгружаем в папку
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.root + config.css.src, ['css']);
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