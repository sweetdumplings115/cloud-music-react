const path = require('path');

const resolve = dir => path.resolve(__dirname , dir);
const CompressionWebpackPlugin = require('compression-webpack-plugin');//打包build生成gizp压缩文件
const webpack  = require('webpack')//
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");//分析
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );


module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    },
    plugins: [
      //打包分析
     // new BundleAnalyzerPlugin(),
      // 打压缩包
      new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp(
              '\\.(' +
              ['js', 'css'].join('|') +
              ')$'
          ),
          threshold: 1024,
          minRatio: 0.8
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true,
            },
        },
        sourceMap: false,
        parallel: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new SimpleProgressWebpackPlugin()
   ]
  }
}
// 用craco进行别名配置，craco可以在不暴露backpack的配置修改项目配置即运行package.jsonde脚本"eject": "react-scripts eject"