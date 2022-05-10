<template>
  <div class="root w-[100vw] h-[100vh] relative">
    <header class="topbar flex justify-start items-center">
      <div class="text-3xl text-emerald-600 pl-10">qiankun demo</div>
    </header>
    <div class="content relative w-full h-full overflow-auto">
      <div :id="DEFAULT_APP_CONTAINER"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DEFAULT_APP_CONTAINER } from "@root/const/qiankun";
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
