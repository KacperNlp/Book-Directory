<template>
  <header class="flex justify-center py-4 border-b">
    <nav>
      <ul class="flex gap-6">
        <nuxt-link to="/" class="hover:text-blue-500">Strona Główna</nuxt-link>
        <nuxt-link to="/my-list" class="hover:text-blue-500"
          >Moja Lista</nuxt-link
        >
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.router-link-active {
  color: #3b82f6;
}
</style>
