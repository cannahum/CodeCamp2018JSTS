const path = require('path');
const fs = require('fs');
const gulp = require('gulp'),
  del = require('del');

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
  return gulp.src(srcPath + '/**/*')
    .pipe(gulp.dest(distPath + buildFolderName));
};

const watchFiles = function() {
  gulp.watch(srcPath + '/**/*', buildBackboneApp);
};

gulp.task('default', gulp.series('clean', gulp.parallel(buildBackboneApp, watchFiles)));
