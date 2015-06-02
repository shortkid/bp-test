var gulp = require('gulp'),
   gutil = require('gulp-util'),
  config = require('./config');

gulp.task('watch',['clean', 'js', 'css', 'html'], function() {
	
	if (!config.isDev) { return; }
	
	config.bSync.init({
		'server' : config.paths.dist.html
	});
	

	gulp.watch( config.paths.src.css+"**/**/*", ['css'] );
	

	gulp.watch( config.paths.src.js+"**/**/**/*", ['js'] )
	    .on('change', config.bSync.reload);
	

	gulp.watch( config.paths.src.html, ['html'] )
	    .on('change', config.bSync.reload);
	

	gulp.watch( config.paths.src.template, ['template'] )
	    .on('change', config.bSync.reload);

});
