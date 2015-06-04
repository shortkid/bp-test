var gulp = require('gulp'),
  bFiles = require('main-bower-files'),
  concat = require('gulp-concat'),
  config = require('./config');

gulp.task('bower', ['clean'], function() {

	return gulp
		.src(bFiles({
			'env' 	  : config.isDev ? "development" : "production",
			'filter'  : '**/**/*.js'
		}))
		.pipe(concat('public.js'))
		.pipe( gulp.dest( config.paths.dist.html+"js-libs/" ) );

});
