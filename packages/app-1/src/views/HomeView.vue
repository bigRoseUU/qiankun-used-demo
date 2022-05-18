<!-- @format -->

<template>
  <div>app-1 home</div>
  <div>
    <div>引用公用组件</div>
    <DeviceDetail></DeviceDetail>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DeviceDetail = defineAsyncComponent(() => import('common/components/device-detail'))
</script>

<style></style>
