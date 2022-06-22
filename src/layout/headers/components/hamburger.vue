<template>
  <div class="hamburger-container" @click="toggleClick" id="hamburger">
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore() // 参数变量
const toggleClick = () => {
  // 参数变量
  store.commit('app/changeSiderType') // 更新侧边栏类型
}
const icon = computed(() => {
  // 参数变量
  return store.getters.siderType ? 'hamburger-opened' : 'hamburger-closed' // 获取侧边栏类型
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
