// load
var gulp = require("gulp"),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyCss = require("gulp-minify-css"),
    plumber = require("gulp-plumber");

// dir setting
var list = [{name:'circlecheck', path:'./circlecheck'}, {name:'circlemap', path:'./circlemap'}];

function taskAdd(app) {

  var appName = app['name'],
      baseDir = app['path'],
      sassDir = baseDir + '/sass/**/*.scss',
      tempDir = baseDir + "/temp/";

  gulp.task(appName + ':sass', function() {
    return gulp.src( sassDir )
      .pipe( plumber() )
      .pipe( sass({outputStyle: 'expanded'}).on('error', sass.logError) )
      .pipe( rename({
        extname: '.css'
      }) )
      .pipe( gulp.dest(tempDir) );
  });

  gulp.task(appName + ':sass:min', [appName + ':sass'], function() {
    return gulp.src( tempDir + '*.css' )
      .pipe( minifyCss() )
      .pipe( rename({
        extname: '.min.css'
      }) )
      .pipe( gulp.dest(baseDir) );
  });

  gulp.task(appName + ':sass:watch', [appName + ':sass:min'], function() {
    var watcher = gulp.watch( sassDir, [appName + ':sass:min']);
  });
}


for (var appData of list) {
  taskAdd(appData);
}