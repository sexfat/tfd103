const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    // app = chunk name = id 
    entry: {
        index: './src/js/app.js', // index
        app2 : './src/js/app2.js' ,// about
        vendor: './src/js/vendor.js' // 共用
    },               // 入口文件
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'js/[name].js'
    },              // 出口文件
   module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                //'style-loader', 會跟原本的衝突 
                'css-loader',
                'sass-loader'
            ],
        }]

    },              // 處裡對應模組
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css" 
        }),
        new HtmlWebpackPlugin({
            chunks : ['index'],  //選擇注入資源 chunk
            inject  : 'head', //預設<body> js </body>  head or body
            template : './src/index.html',
            //來源
            filename : 'index.html'
            // 目的地
        })
    ],             // 對應的插件
    // devServer: {},           // 服務器配置
    //mode: 'production'      // 開發模式配置 production /development
}