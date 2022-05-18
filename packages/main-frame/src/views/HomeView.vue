<!-- @format -->

<template>
  <div class="home">
    <h1>一个用qiankun搭建的微前端demo</h1>
    <div>
      <div>引用公用组件</div>
      <DeviceDetail></DeviceDetail>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DeviceDetail = defineAsyncComponent(() => import('common/components/device-detail'))
</script>

<style></style>
