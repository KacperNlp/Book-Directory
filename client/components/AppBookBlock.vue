<template>
  <el-card>
    <img :src="img" :alt="title" />
    <h3>{{ title }}</h3>
    <span>{{ author }}</span>
  </el-card>
</template>
<script lang="ts" setup>
interface Props {
  title: string;
  author: string;
  img: string;
}

defineProps<Props>();
</script>
