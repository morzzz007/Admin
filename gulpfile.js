// watch the project, compile and reload the browser on changes
var browserify = require('browserify');
var gulp = require('gulp');
var uglify = require('gulp-uglify')
var streamify = require('gulp-streamify')
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var browserSync = require('browser-sync');
 
 
 
gulp.task('compile', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./js/main.jsx');
  return b.bundle()
    .pipe(source('./main.js'))
    .pipe(gulp.dest('./dist'));
});

// start server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
 
// use default task to launch BrowserSync and watch JS files
gulp.task('default', ['compile', 'browser-sync'], function () {
 
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(["./js/**/*.js", "./js/**/*.jsx", "index.html", "app.css"], ['compile', browserSync.reload]);
});