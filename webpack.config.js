const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // app = chunk name = id 
    entry: {
        vendor: './vendor.js', // 套件
        pageone : './app.js', // 自己開發應用js
        pagetwo : './app2.js',
        style : './style.js' // css
    },               // 入口文件
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: '[name].js'
    },              // 出口文件
   module: {
        rules: [{
            // 格式
            test: /\.css$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                //'style-loader', 會跟原本的衝突 
                'css-loader'
            ],
        }]

    },              // 處裡對應模組
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],             // 對應的插件
    // devServer: {},           // 服務器配置
    //mode: 'production'      // 開發模式配置 production /development
}