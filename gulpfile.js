const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const gulpStylelint = require("gulp-stylelint");

const style = () => {
  return src("./assets/css/**/*.scss")
    .pipe(
      gulpStylelint({
        reporters: [
          {
            formatter: "string",
            console: true,
          },
        ],
      })
    )
    .pipe(sass())
    .pipe(dest("./assets/css/"))
    .pipe(browserSync.stream());
}

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    notify: false,
  });
  watch("./assets/css/**/*.scss", style);
  watch("./*.html").on("change", browserSync.reload);
  watch("./assets/js/**/*.js").on("change", browserSync.reload);
};

exports.style = style;
exports.watch = watcher;
