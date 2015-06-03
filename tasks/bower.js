var gulp = require('gulp'),
  bFiles = require('main-bower-files'),
  config = require('./config');

gulp.task('bower', ['clean'], function() {

	return gulp
		.src(bFiles({
			'debugging'  : true,
			'env' : config.isDev ? "development" : "production",
			'filter'     : '**/*.js'
		}))
		.pipe( gulp.dest( config.paths.dist.js+"js-libs/" ) );

});
