<template>
  <AppSection>
    <img v-if="book.img" src="" alt="" />
    <h1>{{ book.title }}</h1>
    <span>{{ book.author }}</span>
    <AppTags :categories="book.categories" />
  </AppSection>
  <AppSection v-if="book.comments?.length">
    <AppHeadline :type="HeadlineTypes.H2">Komentarze użytkowników</AppHeadline>
    <ul class="flex flex-col gap-6">
      <li v-for="comment in book.comments" :key="comment._id">
        <AppComment>
          <template #user>
            <div class="flex flex-col items-center gap-2">
              <img
                class="max-w-12 object-contain"
                src="/img/default-user.svg"
                :alt="comment.author"
              />
              {{ comment.author }}
            </div>
          </template>
          <template #default>
            {{ comment.content }}
          </template>
        </AppComment>
      </li>
    </ul>
  </AppSection>
  <AppSection>
    <AppHeadline :type="HeadlineTypes.H2">Powiązane książki:</AppHeadline>
    <AppSlider />
  </AppSection>
</template>

<script setup lang="ts">
import { HeadlineTypes } from "~/enums/enums";
import type { Book } from "~/types/BookType";

const config = useRuntimeConfig();
const route = useRoute();

const book = reactive<Book>({
  _id: "",
  title: "",
  author: "",
  categories: [],
  img: undefined,
  comments: [],
});

async function getBook() {
  try {
    const { data } = await useFetch<Book>(
      `${config.public.baseURL}/api/books/${route.params.id}`
    );

    if (data.value) {
      Object.assign(book, data.value);
    }

    book.comments = [
      { author: "asdfasdf", content: "sadfasdfasdf", _id: "asdfasdf" },
      { author: "asdfasdf", content: "sadfasdfasdf", _id: "asdfasdssw2f" },
    ];
  } catch (ex) {
    console.error(ex);
  }
}

await getBook();
</script>
