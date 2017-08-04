var autoprefix = require("gulp-autoprefixer"),
    connect    = require("gulp-connect"),
    gulp       = require("gulp"),
    bourbon    = require("bourbon").includePaths,
    neat       = require("bourbon-neat").includePaths,
    sass       = require("gulp-sass");

var paths = {
  scss: ["./source/assets/stylesheets/**/*.scss"]
};

gulp.task("sass", function () {
  return gulp.src(paths.scss)
    .pipe(sass({
        sourcemaps: true,
        includePaths: [bourbon, neat]
    }))
    .pipe(autoprefix("last 2 versions"))
    .pipe(gulp.dest("./source/assets/stylesheets"))
    .pipe(connect.reload());
});

gulp.task("connect", function() {
  connect.server({
    root: "source",
    port: 8000,
    livereload: true
  });
});

gulp.task("default", ["sass", "connect"], function() {
  gulp.watch(paths.scss, ["sass"]);
});
