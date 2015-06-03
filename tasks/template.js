var gulp = require('gulp'),
    jade = require('gulp-jade'),
 htmlmin = require('gulp-minify-html')
 jsCache = require('gulp-ng-html2js'),
  gulpif = require('gulp-if'),
  concat = require('gulp-concat'),
  config = require('./config');

gulp.task('template', ['clean'], function() {

	return gulp
		.src(config.paths.src.template)
		.pipe(jade({
			'pretty' : config.isDev,
			'locals' : {
				'prod' : !config.isDev
			}
		}))
		.pipe(htmlmin({
			'empty'  : true,
			'spare'  : true,
			'quotes' : true
		}))
		.pipe(jsCache({
			'moduleName'  : 'templates',
			'stripPrefix' : 'components/'
		}))
		.pipe(gulpif(config.isDev, concat('templates.js')))
		.pipe(gulp
			.dest( config.paths.dist.template )
		);

});
