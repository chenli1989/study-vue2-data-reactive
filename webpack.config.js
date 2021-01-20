// 从 https://webpack.docschina.org/ 官网照着配置
const path = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        publicPath: '/static',
        // 打包出来的文件名，不会真正的物理生成
        filename: 'bundle.js'
    },
    devServer: {
        // 端口号
        port: 8080,
        // 静态资源文件夹
        contentBase: 'public'
    }
};