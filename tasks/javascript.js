var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
 stylish = require('jshint-stylish'),
  gulpif = require('gulp-if'),
  ngAnno = require('gulp-ng-annotate'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  config = require('./config');

gulp.task('js',function() {
	
	return gulp
		.src(config.paths.src.js)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(ngAnno())
		.pipe(uglify({
			'mangle'	   : !config.isDev,
			'compress'	   : !config.isDev,
			'preserveComments' : !config.isDev,
			'drop_debugger'	   : !config.isDev,
			'drop_console'	   : !config.isDev,
			'unsafe'	   : true,
			'beautify'	   : config.isDev
		}))
		.pipe(gulpif( !config.isDev,concat('prod.js') ))
		.pipe(gulp
			.dest( config.paths.dist.js )
		);
	
});
