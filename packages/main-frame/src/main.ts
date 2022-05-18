/** @format */

fetch('./common-version.json').then(async data => {
  let versionData = await data.json()

  console.log('versionData', versionData)
})

// 异步加载，否则使用webpack的mf功能会报错
import('./bootstrap-main')
