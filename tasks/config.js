var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    jConfig = require('./config.json'),
browserSync = require('browser-sync').create();

var isDev    = !gutil.env.prod;

module.exports.paths = jConfig;
module.exports.isDev = isDev;
module.exports.bSync = browserSync;
