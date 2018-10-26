const path = require('path');
const gulp = require('gulp'),
  rjs = require('gulp-requirejs'),
  sourcemaps = require('gulp-sourcemaps');

const basePath = path.resolve(__dirname, '../../');
const srcPath = path.resolve(basePath, '/src/backbone');
const distPath = path.resolve(basePath, '/dist');

gulp.task('default', function() {
  return rjs({
    baseUrl: srcPath,
    out: distPath + '/dist/bundle.js',
    main: 'mainfile', // no extension
    generateSourceMaps: true,
    shim: {
      // standard require.js shim options
    },
    // ... more require.js options
  })
    .pipe(sourcemaps.init({ loadMaps: true })) // initialize gulp-sourcemaps with the existing map
    .pipe(sourcemaps.write()) // write the source maps
    .pipe(gulp.dest(distPath)); // pipe it to the output DIR
});
