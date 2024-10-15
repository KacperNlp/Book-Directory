<template>
  <el-input
    v-model="search"
    style="width: 320px"
    placeholder="Type something"
    size="large"
  >
    <template #prefix>
      <Icon name="uil:search" size="24" class="duration-20 text-inherit" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
const search = ref(null);
</script>

<style scoped>
.is-focus .iconify {
  color: #409eff;
}
</style>
