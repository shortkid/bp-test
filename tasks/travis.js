var gulp = require('gulp');


gulp.task('travis', ['js', 'css', 'html', 'tests'], function() {
	gutil.log(gutil.colors.blue("Running in Travis Mode"));
});
