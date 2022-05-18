<!-- @format -->

<template>
  <div class="root w-[100vw] h-[100vh] relative">
    <header class="topbar flex justify-start items-center">
      <div class="text-3xl text-emerald-600 pl-10">
        <router-link to="/home">qiankun demo</router-link>
      </div>
      <div class="app-links ml-10">
        <router-link to="/app-1" class="text-xl">app-1</router-link>
      </div>
    </header>
    <div class="content relative w-full h-full overflow-auto">
      <!-- 通过当前的路由匹配判断是否显示子应用 -->
      <router-view v-if="!appContanierVisabled"></router-view>

      <!-- 这个是子应用的挂载点 -->
      <div v-show="appContanierVisabled" :id="DEFAULT_APP_CONTAINER"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DEFAULT_APP_CONTAINER } from '@root/const/qiankun'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

let router = useRouter()
let route = useRoute()
let routeName = computed(() => route.name)

let appContanierVisabled = computed(() => routeName.value === 'app-contanier')
</script>

<style lang="less">
@topbar-height: 60px;

.root {
  padding-top: @topbar-height;
}

.topbar {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: @topbar-height;
  box-sizing: border-box;
  border-bottom: 1px solid #666;
}
</style>
