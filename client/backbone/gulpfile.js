const path = require('path');
const fs = require('fs');
const gulp = require('gulp'),
  sass = require('gulp-sass'),
  serve = require('gulp-serve'),
  amdOptimize = require('amd-optimize'),
  concat = require('gulp-concat'),
  del = require('del');

sass.compiler = require('node-sass');

const basePath = path.resolve(__dirname);
const srcPath = basePath + '/src';
const distPath = basePath + '/dist';
const buildFolderName = '';

gulp.task('clean', function() {

  console.log(basePath);
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }
  if (!fs.existsSync(distPath + buildFolderName)) {
    fs.mkdirSync(distPath + buildFolderName);
  }
  return del([
    distPath + '/**/*'
  ], {
    force: true,
  });
});

gulp.task('serve', serve({
  root: '.',
  port: 8081,
}));

const buildJs = function() {
  console.log('********* BUILDING *********');

  return gulp.src(srcPath + '**/*.js')
    .pipe(amdOptimize(srcPath + '/js/main', {
      paths: {
        jquery: './node_modules/jquery/dist/jquery.min',
        underscore: './node_modules/underscore/underscore-min',
        backbone: './node_modules/backbone/backbone-min',
        text: './node_modules/text/text',
        'credit-card-type': './node_modules/credit-card-type/dist/js/app.built',
        'card-validator': './node_modules/card-validator/index'
      }
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(distPath + buildFolderName));

};

const buildScss = function() {
  return gulp.src(srcPath + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distPath + buildFolderName));
};

const watchFiles = function() {
  gulp.watch(srcPath + '/**/*.js', buildJs);
  gulp.watch(srcPath + '/**/*.scss', buildScss);
};

gulp.task('default', gulp.series('clean', gulp.parallel(buildJs, watchFiles, buildScss, 'serve')));
