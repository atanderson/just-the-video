var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('browserify', function(){
    gulp.src('./src/js/*')
        .pipe(concat('bundle.js'))
        .pipe(browserify({'transform': 'reactify'}))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('scss', function(){
    gulp.src('./src/scss/*')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('move', function(){
    gulp.src('./src/*')
        .pipe(gulp.dest('./build'));
});

gulp.task('build', [
    'browserify',
    'scss',
    'move'
]);

gulp.task('watch', function(){
    gulp.watch('./src/**/*', ['build']);
});