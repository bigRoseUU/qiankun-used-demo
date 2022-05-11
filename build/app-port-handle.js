/** @format */
const fs = require('fs')
const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const importMapPath = path.resolve(rootPath, 'packages/main-frame/public/app-import-map.json')

/**
 * 将应用对应的端口信息添加到 app-import-map.json
 * @param {*} appName 应用名称
 * @param {*} port 端口
 */
function addToImportMap(appName, port, pathHandle) {
  let importMapTmp = fetcImportMapTmp()

  importMapTmp.imports[appName] = pathHandle ? pathHandle() : `http://localhost:${port}`

  fs.writeFileSync(importMapPath, `${JSON.stringify(importMapTmp, null, 2)}`, { encoding: 'utf-8' })
}

/**
 * 获取 入口项目 域名
 */
function getPortalDomain() {
  let importMapTmp = fetcImportMapTmp()

  return importMapTmp.imports.portal || ''
}

/**
 * 读取 app-import-map.json 文件
 */
function fetcImportMapTmp() {
  let importMapTmp = {
    imports: {},
  }
  try {
    const importMapStr = fs.readFileSync(importMapPath, { encoding: 'utf-8' })
    importMapTmp = JSON.parse(importMapStr)
  } catch (error) {
    console.log('没有 importMap, 创建importMap')
  }

  return importMapTmp
}

module.exports = {
  addToImportMap,
  fetcImportMapTmp,
  getPortalDomain,
}
