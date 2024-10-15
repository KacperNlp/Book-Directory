<template>
  <ul class="flex gap-2 mt-2">
    <li v-for="(category, index) in categories" :key="index">
      <el-tag type="info">{{ category }}</el-tag>
    </li>
  </ul>
</template>
<script setup lang="ts">
interface Props {
  categories: string[];
}

defineProps<Props>();
</script>
