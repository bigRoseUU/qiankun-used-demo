/** @format */

type MicroAppStateActions = import('qiankun').MicroAppStateActions

declare interface MicroAppRenderProp extends MicroAppStateActions {
  container: HTMLElement // 子应用挂载的dom节点
  name: string // 子应用名称
  singleSpa: any // singleSpa
}
