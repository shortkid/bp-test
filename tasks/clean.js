var gulp = require('gulp'),
     del = require('del'),
  config = require('./config');

gulp.task('clean', function (cb) {

	del([
		config.paths.dist.js,
		config.paths.dist.css,
		config.paths.dist.html
	], cb);

});