<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)">{{
        $t(`menus.${item.name}`)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute() // 参数变量
const router = useRouter() // 参数变量

const breadcrumbList = ref([]) // 初始化面包屑

const initBreadcrumbList = () => {
  // 初始化面包屑
  breadcrumbList.value = route.matched // 获取面包屑
}
const handleRedirect = (path) => {
  // 跳转页面
  router.push(path) // 跳转页面
}

watch(
  route, // 参数变量
  () => {
    initBreadcrumbList() // 初始化面包屑
  },
  { deep: true, immediate: true } // 深度监听
)
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>
