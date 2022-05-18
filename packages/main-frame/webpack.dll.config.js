/** @format */

const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')

module.exports = {
  entry: {
    // 把 vue2 技术栈相关依赖放到一个单独的动态链接库
    vue3: ['vue', 'vue-router'],
  },
  output: {
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，
    // 也就是 entry 中配置的 vue2
    filename: '[name].dll.js',
    // 输出的文件都放到 build/dll 目录下
    path: path.resolve(__dirname, 'public/dll'),
    // 存放动态链接库的全局变量名称，例如对于 vue2 来说就是 _dll_vue2，即可通过 window._dll_vue2 进行访问
    library: '_dll_[name]',
  },
  plugins: [
    // 接入 DllPlugin
    new DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也是输出的 manifest.json 文件中 name 字段的值
      // 例如 vue2.manifest.json 中就有 "name": "_dll_vue2"
      name: '_dll_[name]',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(__dirname, '../../build/dll-manifest', '[name].manifest.json'),
    }),
  ],
}
