/** @format */

import '@root/utils/import-tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './bootstrap-apps'

createApp(App).use(router).mount('#app')

bootstrap()
