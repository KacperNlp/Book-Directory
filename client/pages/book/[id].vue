<template>
  <section>
    <img v-if="book.img" src="" alt="" />
    <h1>{{ book.title }}</h1>
    <span>{{ book.author }}</span>
    <AppTags :categories="book.categories" />
  </section>
  <section></section>
  <section class="my-16">
    <AppHeadline :type="HeadlineTypes.H2">Powiązane książki:</AppHeadline>
    <AppSlider />
  </section>
</template>

<script setup lang="ts">
import { HeadlineTypes } from "~/enums/enums";
import type { Book } from "~/types/BookType";

const config = useRuntimeConfig();
const route = useRoute();

const categories = reactive(["history", "crime"]);
const book = reactive<Book>({
  _id: "",
  title: "",
  author: "",
  categories: [],
  img: undefined,
});

async function getBook() {
  try {
    const { data } = await useFetch<Book>(
      `${config.public.baseURL}/api/books/${route.params.id}`
    );

    if (data.value) {
      Object.assign(book, data.value);
    }
  } catch (ex) {
    console.error(ex);
  }
}

await getBook();
</script>
