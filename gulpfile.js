var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create(),
    cleancss     = require('gulp-clean-css'),
    concat       = require('gulp-concat'),
    del          = require('del'),
    imageoptim   = require('gulp-image-optimize'),
    less         = require('gulp-less'),
    rename       = require('gulp-rename'),
    uglify       = require('gulp-uglify');

gulp.task('clean', async function() {
  return del.sync('public')
});
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('public'))
});
gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('public'))
});
gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('public/css'))
});
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
});
gulp.task('img', function() {
    return gulp.src('src/img/**/*')
        .pipe(imageoptim())
        .pipe(gulp.dest('public/img'))
}); 

gulp.task('code', function() {
  return gulp.src('src/**/*.html')
      .pipe(browserSync.reload({ stream: true }))
});
gulp.task('less', function() {
  return gulp.src('src/less/*.less')
      .pipe(less())
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.stream());
});
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
      .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
          baseDir: "src/"
        },
        // notify: false   // Отключить уведомления 'browserSync: connected'
    });
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', gulp.parallel('code'));
  gulp.watch('src/less/**/*.less', gulp.parallel('less'));
  gulp.watch('src/js/**/*.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('watch', 'serve'));
gulp.task('build', gulp.parallel('clean', 'html', 'fonts', 'css', 'js', 'img'));

/*
//  собрать библиотеки в один файл!! (если потребуется)
gulp.task('libs', async function() {
  return gulp.src([
    'src/libs/jquery/jquery.min.js',
    'src/libs/magnific-popup/jquery.magnific-popup.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});
*/
/*
ПОСЛЕ сборки проекта необходимо проверить пути в index.html в тегах <link>
  'style.min.css'
  'scripts.min.js'
*/
