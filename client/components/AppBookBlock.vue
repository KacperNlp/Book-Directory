<template>
  <el-card class="relative hover:border-1 hover:border-blue-700">
    <div class="p-8">
      <img v-if="img" :src="img" :alt="title" />
      <img v-else src="/img/book-placeholder.svg" :alt="title" />
    </div>
    <h3 class="font-semibold text-lg md:text-xl my-2">{{ title }}</h3>
    <span class="text-sm md:text-base text-gray-500">{{ author }}</span>
    <div class="mt-2 text-sm">
      <span>Kategorie:</span>
      <AppTags :categories="categories" />
    </div>
    <nuxt-link
      :to="`/book/${id}`"
      class="absolute top-0 left-0 right-0 bottom-0"
    ></nuxt-link>
  </el-card>
</template>
<script lang="ts" setup>
interface Props {
  id: string;
  title: string;
  author: string;
  img?: string;
  categories: string[];
}

defineProps<Props>();
</script>
