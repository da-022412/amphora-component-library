const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("default", gulp.series("sass"));
