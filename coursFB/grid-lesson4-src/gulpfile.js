const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const less = require('gulp-less');
/* const smartgrid = require('smart-grid'); */

const config = {
	root: './src/',
	css: {
		src: 'precss/styles.less',
		dest: 'css',
		watch: 'precss/**/*.less'
	},
	html: 'index.html'
};

/*
	группировка media
	rename - сделать styles.min.css
*/

gulp.task('css', function(){
	gulp.src(config.root + config.css.src)
		/*.pipe(sourcemaps.init())*/
		.pipe(less())
		.pipe(gcmq())
		/*pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./../maps'))*/
		.pipe(gulp.dest(config.root + config.css.dest))
        
		.pipe(browserSync.reload({
            stream: true
        }));
});

/* отслеживать index.html */

gulp.task('watch', ['browserSync'], function(){
	gulp.watch(config.root + config.css.watch, ['css']);
	gulp.watch(config.root + config.html, browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: config.root
		}
	});
});

/*
gulp.task('grid', function(){
	smartgrid(config.root + 'precss', {
		outputStyle: 'sass'
	});
});*/