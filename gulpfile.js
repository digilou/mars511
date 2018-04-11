var gulp = require('gulp');

gulp.task('css', function () {
  return gulp.src('src/css/*.scss')
    .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({ outputStyle: 'compressed' }))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest('build/src/css/'));
});