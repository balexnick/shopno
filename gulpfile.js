var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var concat = require("gulp-concat");
var uglify = require("gulp-uglifyjs");
var minifyCSS = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var del = require("del");

gulp.task("sass", function () {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
    .pipe(minifyCSS())
    .pipe(concat("all.css"))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("img", function (e) {
  return gulp.src("src/img/**/*.*").pipe(gulp.dest("dist/img"));
});

gulp.task("clean", function () {
  return del.sync("dist");
});

gulp.task("copy", ["clean", "sass", "img"], function () {
  var buildCss = gulp.src(["src/css/*.css"]).pipe(gulp.dest("dist/css"));

  var buildJs = gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));

  var buildHtml = gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: "dist",
    notify: false
  });
});

gulp.task("default", ["browser-sync", "copy"], function () {
  gulp.watch("src/sass/**/*.scss", ["copy"]).on("change", browserSync.reload);
  gulp.watch("src/*.html", ["copy"]).on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js", ["copy"]).on("change", browserSync.reload);
});