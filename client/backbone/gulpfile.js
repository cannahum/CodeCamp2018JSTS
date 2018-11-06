const path = require('path');
const fs = require('fs');
const gulp = require('gulp'),
  sass = require('gulp-sass'),
  requireConvert = require("gulp-require-convert"),
  serve = require('gulp-serve'),
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
  root: [distPath, 'node_modules'],
  port: 8081,
}));

const buildJs = function() {
  console.log('********* BUILDING *********');
  return gulp.src(srcPath + '/**/*.js')
    .pipe(requireConvert())
    .pipe(gulp.dest(distPath + buildFolderName));
};

const buildScss = function() {
  return gulp.src(srcPath + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distPath + buildFolderName));
};

const buildHtml = function() {
  return gulp.src(srcPath + '/**/*.html')
    .pipe(gulp.dest(distPath + buildFolderName));
};

const watchFiles = function() {
  gulp.watch(srcPath + '/**/*.js', buildJs);
  gulp.watch(srcPath + '/**/*.scss', buildScss);
  gulp.watch(srcPath + '/**/*.html', buildHtml);
};

gulp.task('default', gulp.series('clean', gulp.parallel(buildJs, watchFiles, buildScss, buildHtml, 'serve')));
