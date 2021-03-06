var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    open: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('watch', ['browserSync'], function() {
  // Reloads the browser whenever HTML, CSS, or JS files change
  // gulp.watch('app/css/*.css', browserSync.reload);
  // gulp.watch('app/*.html', browserSync.reload);
  // gulp.watch('app/js/**/*.js', browserSync.reload);
});
