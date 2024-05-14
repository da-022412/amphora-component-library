const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("dist/css"));
});

gulp.task(
  "serve",
  gulp.series("sass", function () {
    gulp.watch(
      ["src/scss/*.scss", "src/scss/components/*.scss"],
      gulp.series("sass")
    );
  })
);

gulp.task("default", gulp.series("serve"));
