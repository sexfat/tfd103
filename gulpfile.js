const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');




// console log
exports.testgulp =  function test(cb){
console.log('gulp 執行成功');
 cb();
}


function missionA(cb) {
    console.log('missionA');
    cb();
}


function missionB(cb) {
    console.log('missionB');
    cb();
}

// 依序
exports.async = series(missionA , missionB)

// 同時
exports.sync = parallel(missionA , missionB)



//搬家
exports.html = function htmls(){
  return src(['./**/*.html' , './*.html', '!about.html']).pipe(dest('dist'))
}

// 壓縮css  改名
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

function minicss(){
  return src('style.css')
  .pipe(cleanCSS()) // minicss
  .pipe(rename({
      extname: '.min.css'
    })) 
  .pipe(dest('dist'))
}


exports.csscompress = minicss ; 

// sass
const sass = require('gulp-sass')(require('sass'));

function sassstyle(){
  return src('./sass/*.scss')
  .pipe(sass().on('error', sass.logError)) //sass
  .pipe(cleanCSS()) // minicss
  .pipe(dest('dist/css'));
}

//exports.scss = sassstyle

function watchstyle(){
  watch('sass/*.scss' , sassstyle)
}

exports.w = watchstyle





