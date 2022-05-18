/** @format */

const generateConfig = require('../../build/generate-config')
const { name } = require('./package')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = generateConfig(
  { process, __dirname, name, projectType: 'common' },
  {
    publicPath: isProduction ? './common/' : 'auto',
    configureWebpack: {
      optimization: {
        // runtimeChunk: false,
        splitChunks: false, // 如果要使用 module-federation-plugin ，要这样设置。
      },
    },
    chainWebpack: config => {
      config.devServer.headers({
        'Access-Control-Allow-Origin': '*',
      })
    },
  },
)
