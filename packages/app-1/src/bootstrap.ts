/** @format */

import { createApp } from 'vue'

import AppPage from './App.vue'
import router from './router'

export default function render(props: Partial<MicroAppRenderProp> = {}) {
  const { container } = props

  const instance = createApp(AppPage)

  instance.use(router)

  let containerDOM = container?.querySelector('#app')

  if (container && !containerDOM) {
    throw new Error('子应用没找到在主应用的挂载点')
  }

  instance.mount(container ? containerDOM || '#app' : '#app')

  return instance
}
