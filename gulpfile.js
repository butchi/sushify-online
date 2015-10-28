var gulp = require('gulp');
var browserify = require('browserify');
var resolutions = require('browserify-resolutions');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

// Build task
gulp.task('build', function () {
  browserify({
    entries: 'index.js',
    basedir: 'src',
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .transform(babelify)
  .plugin(resolutions, '*') // de-dupe required scripts
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['build']);
