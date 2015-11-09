var gulp = require('gulp');
var browserify = require('browserify');
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
  .transform(babelify, { presets: ["es2015", "react"] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['build']);
