const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return src("sass/**/*.scss") // Source folder containing Sass files
    .pipe(sass().on("error", sass.logError)) // Compile Sass and log errors
    .pipe(dest("css")); // Destination folder for compiled CSS
}

// Watch task to monitor changes in Sass files and recompile
function watchSass() {
  watch(["sass/**/*.scss"], compileSass);
}

// Define default task
exports.default = series(compileSass, watchSass);
