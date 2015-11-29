var
  SYMLINKS,
  createSymlink,
  gulp = require('gulp'),
  path = require('path'),
  browserSync = require('browser-sync').create(),
  stylus = require('gulp-stylus'),
  jshint = require('gulp-jshint'),
  jade = require('gulp-jade'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  nib = require('nib'),
  pkg = require('./package.json'),
  rename = require('gulp-rename'),
  symlink = require('gulp-symlink'),
  babelify = require('babelify'),
  imagemin = require('gulp-imagemin');

SYMLINKS = {
  config: './config > node_modules',
  libs: './libs > node_modules',
};

createSymlink = function(key, path) {
  path = path.split('>');
  gulp
    .src(path[0].trim())
    .pipe(symlink(path[1].trim() + '/' + key, { force: true }));
};

gulp.task('symlink', function() {
  for (var key in SYMLINKS) {
    createSymlink(key, SYMLINKS[key]);
  }
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './public',
    },
  });
});

gulp.task('stylus', function() {
  gulp.src('./stylesheets/index.styl')
    .pipe(stylus({
      paths: [path.join(__dirname, '/node_modules')],
      'include css': true,
      use: [nib()],
      urlfunc: 'embedurl',
      linenos: true,
      define: {
        $version: pkg.version,
      },
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public/assets/'));
});

gulp.task('images', function() {
  gulp.src('./images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/images'));
});

gulp.task('lint', function() {
  gulp.src('src/**/*.js')
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
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('jade', function() {
  gulp.src(['./template/**/*.jade', '!./template/**/_*.jade'])
      .pipe(jade({
        pretty: true,
      }))
      .on('error', console.log)
  .pipe(gulp.dest('./public'));
});

gulp.task('default', ['images', 'js', 'stylus', 'jade']);

gulp.task('serve', ['default', 'browser-sync'], function() {
  gulp.watch('./images/**/*', ['images']);
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./stylesheets/**/*.styl', ['stylus']);
  gulp.watch('./template/**/*.jade', ['jade']);

  //gulp.watch('./public/**/*.*').on('change', browserSync.reload);
});
