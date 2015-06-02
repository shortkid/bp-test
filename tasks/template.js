var gulp = require('gulp'),
    jade = require('gulp-jade'),
 htmlmin = require('gulp-minify-html')
 jsCache = require('gulp-ng-html2js'),
  config = require('./config');

gulp.task('template',function() {

	return gulp
		.src(config.paths.src.template)
		.jade({
			'pretty' : config.isDev,
			'locals' : {
				'prod' : !config.isDev
			}
		})
		.pipe(htmlmin({
			'empty'  : true,
			'spare'  : true,
			'quotes' : true
		}))
		.pipe(jsCache({
			moduleName: function (file) {

					    var pathParts = file.path.split('/'),
						folder    = pathParts[pathParts.length - 2],
						replaceSr = function (match) {
							return match.substr(1).toUpperCase();
						};

						return folder.replace(/-[a-z]/g,replaceSr);
				   }
		}))
		.pipe(gulpif(!config.isDev, concat('templates.js')))
		.pipe(gulp
			.dst( config.paths.dist.template )
		);

});
