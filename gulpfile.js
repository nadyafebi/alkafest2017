/*
  Modules
*/
const browser = require('browser-sync');
const gulp    = require('gulp');
const panini  = require('panini');
const sass    = require('gulp-sass');

/*
  Tasks
*/

gulp.task('build', gulp.parallel(compile, copy, style));

gulp.task('default', gulp.series('build', serve, watch));

/*
  Functions
*/

function compile() {
  return gulp.src('./panini/pages/**/*.html')
             .pipe(panini({
               root: './panini/pages/',
               layouts: './panini/layouts/',
               partials: './panini/partials'
             }))
             .pipe(gulp.dest('./dist'));
}

function copy() {
  return gulp.src('./node_modules/foundation-sites/dist/js/foundation.min.js')
             .pipe(gulp.dest('./dist/js'));
}

function style() {
  return gulp.src('./scss/**/*.scss')
             .pipe(sass({
               includePaths: './node_modules/foundation-sites/scss'
             }).on('error', sass.logError))
             .pipe(gulp.dest('./dist/css'));
}

function reset(done) {
  panini.refresh();
  done();
}

function serve(done) {
  browser.init({
    server: './dist',
    port: 8000
  });
  done();
}

function watch() {
  gulp.watch('./panini/pages/**/*.html').on('all', gulp.series(compile, browser.reload));
  gulp.watch('./panini/{layouts,partials}/**/*.html').on('all', gulp.series(reset, compile, browser.reload));
  gulp.watch('./sass/**/*.scss').on('all', gulp.series(style, browser.reload));
}
