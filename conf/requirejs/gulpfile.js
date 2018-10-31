const path = require('path');
const fs = require('fs');
const gulp = require('gulp'),
  sass = require('gulp-sass'),
  del = require('del');

sass.compiler = require('node-sass');

const basePath = path.resolve(__dirname, '../../');
const srcPath = basePath + '/src/backbone';
const distPath = basePath + '/dist';
const buildFolderName = '/backbone';

gulp.task('clean', function() {

  console.log(basePath);
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }
  if (!fs.existsSync(distPath + buildFolderName)) {
    fs.mkdirSync(distPath + buildFolderName);
  }
  return del([
    distPath + '/backbone/**/*'
  ], {
    force: true,
  });
});

const buildBackboneApp = function() {
  console.log('********* BUILDING *********');
  return gulp.src([srcPath + '/**/*.js', srcPath + '/**/*.html'])
    .pipe(gulp.dest(distPath + buildFolderName));
};

const watchJsFiles = function() {
  gulp.watch(srcPath + '/**/*', buildBackboneApp);
};

const watchScssFiles = function() {
  return gulp.src(srcPath + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distPath + buildFolderName));
};

gulp.task('default', gulp.series('clean', gulp.parallel(buildBackboneApp, watchJsFiles, watchScssFiles)));
