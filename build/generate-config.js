/** @format */

const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const { ModuleFederationPlugin } = require('webpack').container

const resolve = dir => {
  return path.join(__dirname, '.', dir)
}

/**
 * @type {() => import('@vue/cli-service').ProjectOptions}
 */
module.exports = function (meta, extraConfig = {}) {
  let { name: appName, projectType, process, __dirname: appDirname } = meta
  let { chainWebpack } = extraConfig
  const isProduction = process.env.NODE_ENV === 'production'

  return defineConfig({
    transpileDependencies: true,
    publicPath: projectType !== 'child' ? (isProduction ? `./${appName}/` : './') : `./`,
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
    ...extraConfig,
    chainWebpack: config => {
      console.log('构建应用', meta.name)

      config.resolve.alias.set('@root', resolve('../'))

      config.devServer.headers({
        'Access-Control-Allow-Origin': '*',
      })

      // 将要用qiankun加载的应用改为库方式打包。
      if (projectType === 'child') {
        console.log('子应用使用库模式打包', appName)
        config.output.library(`${appName}-[name]`).libraryTarget('umd')
      }

      // 配置模块联邦
      if (projectType === 'common') {
        let componentList = ['device-detail', 'location-picker'] // 目前先这样配置，后期可优化读取组件列表的方式

        config.plugin('module-federation-plugin').use(ModuleFederationPlugin, [
          {
            name: 'common',
            filename: 'remoteEntry.js',
            // 以组件为粒度进行输出，实现按需加载。
            exposes: componentList.reduce((pre, cur) => {
              pre[`./components/${cur}`] = path.resolve(appDirname, `src/components/${cur}`)

              return pre
            }, {}),
            // shared: shareConfig, // 在微前端模式下，如果使用了共享库，在同时加载两个子应用会出现错误。所以不使用这个，用 Dll 的方式代替。
          },
        ])
      } else {
        console.log('use ModuleFederationPlugin')
        config.plugin('module-federation-plugin').use(ModuleFederationPlugin, [
          {
            name: appName,
            // shared: shareConfig,
            remotes: {
              common: isProduction ? 'common@common/remoteEntry.js' : 'common@http://localhost:12000/remoteEntry.js',
            },
          },
        ])
      }

      if (isProduction) {
        // 配置
        config.plugin('dllReference').use(DllReferencePlugin, [
          {
            // 描述 vue3 动态链接库的文件内容
            manifest: require('./dll-manifest/vue3.manifest.json'),
          },
        ])
      }

      // 导入项目自定义配置
      chainWebpack && chainWebpack(config)
    },
  })
}
