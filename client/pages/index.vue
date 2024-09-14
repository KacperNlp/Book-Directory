<template>
  <div class="my-16">
    <ul>
      <li v-for="book in books" :key="book.id">
        <AppBookBlock :title="book.title" :author="book.author" :img="book.img" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig();

const books = ref([]);

async function fetchBooksList() {
  try {
    const { data: booksList } = await useFetch(`${config.public.baseURL}books`);
    books.value = booksList.value;
  } catch (ex) {
    console.error(ex);
  }
}

fetchBooksList();
</script>
