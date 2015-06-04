var gulp = require('gulp'),
gulpDocs = require('gulp-ngdocs'),
  config = require('./config');


gulp.task('docs', ['clean'], function() {

  return gulp
	  .src(config.paths.src.js)
          .pipe(gulpDocs.process({
		'html5Mode': true
		}))
	  .pipe(gulp
		  .dest( config.paths.dist.html+'docs/' )
	  );

});
