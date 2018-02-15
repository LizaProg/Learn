const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
const smartgrid = require('smart-grid');

const config = {
    root: './src/',
    html: {
        src: 'index.html'
    },
    css: {
        watch: 'precss/**/*.less',
        src: 'precss/styles.less',
        dest: 'css'
    }
};

gulp.task('build', function () {
    gulp.src(config.root + config.css.src)
            /*.pipe(sourcemaps.init())*/
            .pipe(less())
            .pipe(gcmq())
            /*.pipe(autoprefixer({
                browsers: ['> 0.1%'],
                cascade: false
            }))
            .pipe(cleanCSS({
                level: 2
            }))*/
            /*.pipe(sourcemaps.write('.'))*/
            .pipe(gulp.dest(config.root + config.css.dest))
            .pipe(browserSync.reload({
                stream: true
            }));
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.root + config.css.watch, ['build']);
    gulp.watch(config.root + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.root
        },
        //tunnel: true
    });
});

const options = {
    columns: 24,
    offset: '10px',
    container: {
        maxWidth: "950px",
        fields: "20px"
    },
    breakPoints: {
        md: {
            width: "930px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "420px",
            fields: "10px"
        }
    }
};

gulp.task('grid', function(){
    smartgrid(config.root + 'precss', options);
});