const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

exports.testgulp =  function test(cb){
console.log('gulp 執行成功');
 cb();
}
