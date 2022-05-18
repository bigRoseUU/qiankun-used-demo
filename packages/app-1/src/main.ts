/** @format */

import './public-path'

let instance: any = null

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  import('./bootstrap').then(data => {
    data.default()
  })
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props: any) {
  console.log('[vue] props from main framework', props)
  import('./bootstrap').then(async data => {
    instance = await data.default(props)
  })
}

export async function unmount() {
  if (!instance) return

  instance.unmount()

  if (instance._container) {
    instance._container.innerHTML = ''
  }

  instance = null
}
