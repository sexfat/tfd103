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

// 壓縮css 
const cleanCSS = require('gulp-clean-css');

function minicss(){
  return src('style.css')
  .pipe(cleanCSS({compatibility: 'ie10'})) // minicss 
  .pipe(dest('dist'))
}


exports.csscompress = minicss ; 





