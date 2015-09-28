var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

// first-step
gulp.task('build1', function() {
  browserify('./first-step/src/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./first-step/dist'));
});

// second-step
gulp.task('build2', function() {
  browserify('./second-step/src/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./second-step/dist'));
});

// third-step
var bundler = watchify(browserify('./third-step/src/app.js', watchify.args));
gulp.task('build3', bundle);
bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {
  return bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./third-step/dist'));
}
