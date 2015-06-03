var gulp = require('gulp'),
  config = require('./config');

gulp.task('server', function() {

	config.bSync.init({
		'server' : config.paths.dist.html
	});

});
