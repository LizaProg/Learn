const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const gcmq = require('gulp-group-css-media-queries');
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

gulp.task('css', function(){
	gulp.src(config.root + config.css.src)
		.pipe(less())
		.pipe(gcmq())
		.pipe(gulp.dest(config.root + config.css.dest))
        
		.pipe(browserSync.reload({
            stream: true
        }));
});

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
