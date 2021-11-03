const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // app = chunk name = id 
    entry: {
        app1: './src/js/app.js', // index
        app2 : './src/js/app2.js' // about
    },               // 入口文件
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'js/[name].js'
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
            filename: "css/[name].css" 
        })
    ],             // 對應的插件
    // devServer: {},           // 服務器配置
    //mode: 'production'      // 開發模式配置 production /development
}