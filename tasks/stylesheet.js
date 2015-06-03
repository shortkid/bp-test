var gulp = require('gulp'),
    scss = require('gulp-sass'),
  gulpif = require('gulp-if'),
    csso = require('gulp-csso'),
  concat = require('gulp-concat'),
  config = require('./config');
   

gulp.task('css', ['clean'], function() {

	return gulp
		.src(config.paths.src.css)
		.pipe(scss({
			'sourceMap'    : config.isDev,
			'outputStyle'  : ( config.isDev ? 'expanded' : 'compressed' ),
			'outFile'      : ( config.isDev ? config.paths.src.css+"/maps/" : false ),
			'includePaths' : [ config.paths.bower+'/bootstrap-sass/assets/stylesheets' ]
			}))
		.pipe(gulpif( !config.isDev, concat('style.css') ))
		.pipe(gulpif( !config.isDev, csso() ))
		.pipe(gulp
			.dest( config.paths.dist.css )
		)
		.pipe(gulpif( config.isDev, config.bSync.stream() ));

});
