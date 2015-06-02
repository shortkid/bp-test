var gulp = require('gulp'),
   gutil = require('gulp-util'),
  config = require('./config');

gulp.task('default', ['clean', 'docs', 'js', 'css', 'html'], function() {
		
	if ( !config.isDev ) {
		gutil.log(gutil.colors.red("Running in Production"));
	} else {
		gutil.log(gutil.colors.green("Running in Development"));
	}

});
