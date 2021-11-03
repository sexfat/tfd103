const path = require('path');

module.exports = {
    // app = chunk name = id 
    entry: {
        vendor: './vendor.js', // 套件
        pageone : './app.js', // 自己開發應用js
        pagetwo : './app2.js'
    },               // 入口文件
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: '[name].js'
    },              // 出口文件
    // module: {},              // 處裡對應模組
    // plugins: [],             // 對應的插件
    // devServer: {},           // 服務器配置
    //mode: 'production'      // 開發模式配置 production /development
}