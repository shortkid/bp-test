var gulp = require('gulp'),
    jade = require('gulp-jade'),
      fs = require('fs'),
    path = require('path'),
  gulpif = require('gulp-if'),
  incSrc = require('gulp-include-source'),
 htmlmin = require('gulp-minify-html'),
   gutil = require('gulp-util'),
  config = require('./config');   



gulp.task('html', ['bower', 'template', 'js', 'css'], function() {

	return gulp
		.src( config.paths.src.html )
		.pipe(jade({
			'cache'  : !config.isDev,
			'pretty' : config.isDev,
			'locals' : {
				'prod'     : !config.isDev,
				'appName'  : config.paths.appName
			}
		}))
		.pipe(incSrc({ 
			'cwd' : config.paths.dist.html
			}))
		.pipe(gulpif( !config.isDev, htmlmin({
			'collapseWhitespace' : true,
			'removeComments'     : true,
			'minifyCSS'          : true
		})))
		.pipe( gulp
			.dest( config.paths.dist.html ) 
		);

});
