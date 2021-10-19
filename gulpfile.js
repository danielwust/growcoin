import { task, src, dest } from "gulp";
import { prependText } from "gulp-append-prepend";

task("licenses", async function () {
  src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      prependText(`/*!
=========================================================
* Growcoin - v1.0.0
=========================================================
*/`)
    )
    .pipe(dest("./", { overwrite: true }));

  src("build/index.html", { base: "./" })
    .pipe(
      prependText(`<!--
=========================================================
* Growcoin - v1.0.0
=========================================================
-->`)
    )
    .pipe(dest("./", { overwrite: true }));

  src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      prependText(`/*!
=========================================================
* Growcoin - v1.0.0
=========================================================
*/`)
    )
    .pipe(dest("./", { overwrite: true }));
  return;
});
