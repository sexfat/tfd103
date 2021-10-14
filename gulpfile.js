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