/** @format */

const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const resolve = dir => {
  return path.join(__dirname, '.', dir)
}

/**
 * @type {() => import('@vue/cli-service').ProjectOptions}
 */
module.exports = function (meta, extraConfig = {}) {
  let { name: appName, isChild, process } = meta
  const isProduction = process.env.NODE_ENV === 'production'

  return defineConfig({
    transpileDependencies: true,
    publicPath: isProduction ? `./${appName}/` : `./`,
    outputDir: resolve(`../dist/${appName}`),
    css: {
      loaderOptions: {
        postcss: {
          postcssOptions: {
            plugins: {
              autoprefixer: {},
              tailwindcss: {
                config: resolve('../tailwind.config.js'),
              },
            },
          },
        },
      },
    },
    chainWebpack: config => {
      console.log('构建应用', meta.name)

      config.resolve.alias.set('@root', resolve('../'))

      config.devServer.headers({
        'Access-Control-Allow-Origin': '*',
      })

      if (isChild) {
        config.output.library(`${appName}-[name]`).libraryTarget('umd')
      }
    },
  })
}
