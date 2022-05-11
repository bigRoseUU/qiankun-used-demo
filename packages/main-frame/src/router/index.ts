/** @format */

import { h } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      path: '/home',
    },
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
  },
  {
    path: '/app-:appName(.*)',
    name: 'app-contanier',
    component: {
      render: () => h('div'),
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
