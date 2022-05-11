/** @format */

import './public-path'
import { createApp, App } from 'vue'
import AppPage from './App.vue'
import router from './router'

let instance: App<Element> | null = null

function render(props: Partial<MicroAppRenderProp> = {}) {
  const { container } = props

  const instance = createApp(AppPage)

  instance.use(router)

  let containerDOM = container?.querySelector('#app')

  if (container && !containerDOM) {
    throw new Error('子应用没找到在主应用的挂载点')
  }

  instance.mount(container ? containerDOM || '#app' : '#app')
}

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
