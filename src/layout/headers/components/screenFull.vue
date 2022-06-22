<template>
  <div @click="handleFullScreen" id="screenFul">
    <svg-icon :icon="icon ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script setup>
import screenfull from 'screenfull' // 全屏插件
import { ref, onMounted, onBeforeMount } from 'vue' // 参数变量

const icon = ref(screenfull.isFullscreen) // 初始化是否全屏
const handleFullScreen = () => {
  // 全屏操作
  if (screenfull.isEnabled) {
    // 判断是否支持全屏
    screenfull.toggle() // 切换全屏
  }
}

const changeIcon = () => {
  icon.value = screenfull.isFullscreen // 更新icon
}

onMounted(() => {
  screenfull.on('change', changeIcon) // 监听全屏变化
})

onBeforeMount(() => {
  screenfull.off('change') // 取消监听
})
</script>

<style lang="scss" scoped></style>
