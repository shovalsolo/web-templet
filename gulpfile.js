var gulp = require("gulp");
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//////
// -Sass to css
//////
var SASS_SRC = './src/Assets/scss/**/*.scss';
var SASS_DEST = './src/Assets/css';


// Compile the SCSS

gulp.task('compile_scss',function(){
    gulp.src(SASS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SASS_DEST))
    .pipe(gulp.dest(SASS_DEST));
});

// Detect changes in Sass
gulp.task('watch_scss',function(){
    gulp.watch(SASS_SRC, ['compile_scss']);
});

//Run Task to start run the word gulp

gulp.task('default', ['watch_scss']);