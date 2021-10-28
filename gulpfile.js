const {
  src,
  dest,
  series,
  parallel,
  watch
} = require('gulp');




// console log
exports.testgulp = function test(cb) {
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
exports.async = series(missionA, missionB)

// 同時
exports.sync = parallel(missionA, missionB)



//搬家
exports.html = function htmls() {
  return src(['./**/*.html', './*.html', '!about.html']).pipe(dest('dist'))
}

// 壓縮css  改名
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function minicss() {
  return src('style.css')
    .pipe(cleanCSS()) // minicss
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('dist'))
}


exports.csscompress = minicss;

// sass
const sass = require('gulp-sass')(require('sass'));

// 開發用
function sassstyle() {
  return src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) //sass
    .pipe(cleanCSS()) // minicss
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'));
}
//上線用sass
function sassonline() {
  return src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError)) //sass
    .pipe(cleanCSS()) // minicss
    .pipe(dest('dist/css'));
}



//css3 跨瀏覽器使用 
const autoprefixer = require('gulp-autoprefixer');
exports.prefixer = () => (
     src('./dist/css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('./dist/css/prefixer/'))
);



//exports.scss = sassstyle



//html 樣板
const fileinclude = require('gulp-file-include');

function includeHTML() {
  return src('*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./dist'));
}

// 監看
function watchall() {
  watch(['sass/*.scss', 'sass/**/*.scss'], sassstyle)
  watch(['*.html', 'layout/*.html'], includeHTML)
}
// 壓圖
const imagemin = require('gulp-imagemin');
function min_images(){
    return src('images/*.*')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 70, progressive: true}) // 壓縮品質      quality越低 -> 壓縮越大 -> 品質越差 
    ]))
    .pipe(dest('dist/images'))
}


exports.mg = min_images;


//js es6 ->es5
const babel = require('gulp-babel');

function babel5() {
    return src('js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'));
}
exports.js = babel5


const browserSync = require('browser-sync');
const reload = browserSync.reload;



function browser(done) {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: "index.html"
    },
    port: 3000
  });
  watch(['sass/*.scss', 'sass/**/*.scss'] , sassstyle).on('change' , reload);
  watch(['*.html', 'layout/*.html'], includeHTML).on('change' , reload);
  done();
}

exports.default = browser;



const clean = require('gulp-clean');

function clear() {
  return src('dist' ,{ read: false ,allowEmpty: true })
  //不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
  .pipe(clean({force: true})); //強制刪除檔案 
}

exports.cls = clear;






