const path = require('path');

const resolve = dir => path.resolve(__dirname , dir);
const CompressionWebpackPlugin = require('compression-webpack-plugin');//打包build生成gizp压缩文件
const webpack  = require('webpack')//

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    },
  }
}
// 用craco进行别名配置，craco可以在不暴露backpack的配置修改项目配置即运行package.jsonde脚本"eject": "react-scripts eject"