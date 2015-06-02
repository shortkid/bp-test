var gulp = require('gulp'),
   karma = require('gulp-karma'),
   gutil = require('gulp-util'),
   karma = require('gulp-karma'),
  config = require('./config');

gulp.task('tests',function(cb) {

	return gulp
		.src( config.paths.test.tests )
		.pipe(karma({
			'configFile' : config.paths.test.config,
			'action'     : config.isDev ? 'watch' : 'run'
		}))
		.on('error',function(err) {
			if ( !config.isDev ) {
				throw err;
			}
			gutil.log("Error: "+err);
		});

});
