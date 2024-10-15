<template>
  <section>
    <img src="" alt="" />
    <h1>Lorem, ipsum dolor.</h1>
    <AppTags :categories="categories" />
  </section>
</template>

<script setup lang="ts">
const categories = reactive(["history", "crime"]);
</script>
