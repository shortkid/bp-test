var gulp = require('gulp'),
     del = require('del'),
  config = require('./config');

gulp.task('clean', function(cb) {

	del([
		config.paths.dist.html
	],{ 'force' : true }, cb);
	
});
