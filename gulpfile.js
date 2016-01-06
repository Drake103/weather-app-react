var
  SYMLINKS,
  createSymlink,
  gulp = require('gulp'),
  path = require('path'),
  browserSync = require('browser-sync').create(),
  jade = require('gulp-jade'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  pkg = require('./package.json'),
  rename = require('gulp-rename'),
  symlink = require('gulp-symlink'),
  babelify = require('babelify');
var express = require('express');

SYMLINKS = {
  config: './config > node_modules',
  libs: './libs > node_modules',
};

createSymlink = function(key, path) {
  path = path.split('>');
  return gulp
    .src(path[0].trim())
    .pipe(symlink(path[1].trim() + '/' + key, { force: true }));
};

gulp.task('symlink', function() {
  for (var key in SYMLINKS) {
    createSymlink(key, SYMLINKS[key]);
  }
});

// Static server
gulp.task('static-server', function() {
  var app = express();
  app.use(express.static('./dist'));

  var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
});

gulp.task('css', function() {
  var postcss = require('gulp-postcss');

  return gulp.src('./stylesheets/**/*.css')
    .pipe(postcss([

    ]));
});

gulp.task('images', function() {
  var imagemin = require('gulp-imagemin');

  return gulp.src('./images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('lint', function() {
  var jshint = require('gulp-jshint');

  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function() {
  var bundle = browserify({
    entries: ['./src/index.js'],
    paths: ['./node_modules'],
    debug: true,
  });

  bundle.transform(babelify, { presets: ['es2015', 'react'] });

  bundle.exclude('underscore');
  bundle.require('lodash', { expose: 'underscore' });
  bundle.require('./config/client', { expose: 'config' });
  bundle.require('./config/langs/client', { expose: 'config/langs' });

  bundle.bundle()
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(source('script.js'))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('jade', function() {
  gulp.src(['./template/**/*.jade', '!./template/**/_*.jade'])
      .pipe(jade({
        pretty: true,
      }))
      .on('error', console.log)
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['images', 'js', 'css', 'jade']);

gulp.task('serve', ['default', 'static-server'], function() {
  gulp.watch('./images/**/*', ['images']);
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./stylesheets/**/*.css', ['css']);
  gulp.watch('./template/**/*.jade', ['jade']);

  //gulp.watch('./dist/**/*.*').on('change', browserSync.reload);
});
