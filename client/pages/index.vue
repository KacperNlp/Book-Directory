<template>
  <div class="my-16">
    <ul
      class="flex flex-col gap-x-8 gap-y-10 md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="book in books" :key="book._id">
        <AppBookBlock
          :title="book.title"
          :author="book.author"
          :img="book.img"
          :categories="book.categories"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type { Book } from "~/types/BookType";

const config = useRuntimeConfig();

const books = ref<Book[]>([]);

async function fetchBooksList() {
  try {
    const { data: booksList } = await useFetch(
      `${config.public.baseURL}/api/books`
    );
    books.value = booksList.value;
    console.log(booksList.value);
  } catch (ex) {
    console.error(ex);
  }
}

fetchBooksList();
</script>
