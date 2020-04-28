var gulp   = require('gulp');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');
var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;

gulp.task('serve', ['sass', 'transpuglify'], function() {
	browserSync.init({
		server: './'
  });
	gulp.watch('./stylesheets/**/*.scss', ['sass']);
	gulp.watch('./javascripts/**/*.js', ['transpuglify']);
	gulp.watch('./*.html').on('change', reload);
});

gulp.task('sass', function() {
	return gulp.src('stylesheets/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('./stylesheets'))
		.pipe(browserSync.stream());
});

gulp.task('transpuglify', function () {
	return gulp.src([
    'javascripts/core/*.js',  
		'javascripts/modules/*.js'    
		])
		.pipe(concat('main.min.js'))
		.pipe(babel({
			presets: ['babel-preset-env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./javascripts'))
		.pipe(browserSync.stream());
})

gulp.task('default', ['serve']);