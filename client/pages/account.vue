<template>
  <div>
    <h1>Moja lista książek</h1>
    <section class="max-w-lg my-16 mx-auto">
      <AppAddBookForm />
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
</script>
