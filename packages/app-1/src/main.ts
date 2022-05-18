/** @format */

import './public-path'
import render from './bootstrap'

let instance: any = null

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props: any) {
  console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount() {
  if (!instance) return

  instance.unmount()

  if (instance._container) {
    instance._container.innerHTML = ''
  }

  instance = null
}
