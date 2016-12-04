var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(){
   return gulp.src('scss/style.scss')
     .pipe(sourcemaps.init())
     .pipe(sass({errLogToConsole: true, outputStyle: 'nested'}))
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('css'))
 });

gulp.task('jshint', function(){
  return gulp.src('scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
})

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
})
