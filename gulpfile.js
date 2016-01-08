var gulp          = require('gulp');
var path          = require('path');
var browserSync   = require('browser-sync').create();
var jade          = require('gulp-jade');
var browserify    = require('browserify');
var source        = require('vinyl-source-stream');
var pkg           = require('./package.json');
var rename        = require('gulp-rename');
var symlink       = require('gulp-symlink');
var babelify      = require('babelify');
var express       = require('express');
var gulpSequence  = require('gulp-sequence');

gulp.task('clean', function() {
  var rimraf = require('gulp-rimraf');

  return gulp.src('./dist', { read: false })
    .pipe(rimraf({ force: true }));
});

gulp.task('symlink', function() {

  var SYMLINKS = {
    config: './config > node_modules',
    libs: './libs > node_modules',
  };

  var createSymlink = function(key, path) {
    path = path.split('>');
    return gulp
      .src(path[0].trim())
      .pipe(symlink(path[1].trim() + '/' + key, { force: true }));
  };

  for (var key in SYMLINKS) {
    createSymlink(key, SYMLINKS[key]);
  }
});

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

gulp.task('css:build', function() {
  var postcss = require('gulp-postcss');
  var rename = require('gulp-rename');

  var processors = [
    require('postcss-clearfix'),
    require('postcss-neat'),
    require('autoprefixer'),
    require('postcss-cssnext'),
    require('precss'),
  ];

  return gulp.src('./stylesheets/index.pcss')
    .pipe(postcss(processors))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('css:watch', function() {
  gulp.watch('./stylesheets/**/*.pcss', ['css:build']);
});

gulp.task('images:build', function() {
  var imagemin = require('gulp-imagemin');

  return gulp.src('./images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('images:watch', function() {
  gulp.watch('./images/**/*', ['images:build']);
});

gulp.task('js:build', function() {
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

  return bundle.bundle()
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(source('script.js'))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('js:watch', function() {
  gulp.watch('./src/**/*.js', ['js:build']);
});

gulp.task('jade:build', function() {
  return gulp.src(['./template/**/*.jade', '!./template/**/_*.jade'])
    .pipe(jade({
      pretty: true,
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./dist'));
});

gulp.task('jade:watch', function() {
  gulp.watch('./template/**/*.jade', ['jade:build']);
});

gulp.task('default', gulpSequence('clean', ['images:build', 'js:build', 'css:build', 'jade:build']));

gulp.task('watch', ['js:watch', 'css:watch']);

gulp.task('serve', gulpSequence('default', ['static-server', 'watch']));
