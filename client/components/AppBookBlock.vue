<template>
  <el-card>
    <div class="p-8">
      <img v-if="img" :src="img" :alt="title" />
      <img v-else src="/img/book-placeholder.svg" :alt="title" />
    </div>
    <h3 class="font-semibold text-lg md:text-xl my-2">{{ title }}</h3>
    <span class="text-sm md:text-base text-gray-500">{{ author }}</span>
    <div class="mt-2 text-sm">
      <span>Kategorie:</span>
      <ul class="flex gap-2 mt-2">
        <li v-for="(category, index) in categories" :key="index">
          <el-tag type="info">{{ category }}</el-tag>
        </li>
      </ul>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
interface Props {
  title: string;
  author: string;
  img: string;
  categories: string[];
}

defineProps<Props>();
</script>
