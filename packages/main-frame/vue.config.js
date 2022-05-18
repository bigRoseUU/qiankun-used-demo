/** @format */

const generateConfig = require('../../build/generate-config')
const { name } = require('./package')
const isProduction = process.env.NODE_ENV === 'production'

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = generateConfig(
  { process, __dirname, name, projectType: 'main' },
  {
    chainWebpack: config => {
      if (isProduction) {
        // console.log('把dll地址插入到html中')
        config.plugin('html').tap(args => {
          args[0] = {
            ...args[0],
            externalUrls: ['main-frame/dll/vue3.dll.js'],
          }
          return args
        })
      }
    },
  },
)
