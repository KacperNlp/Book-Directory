<template>
  <el-card>
    <template #header>
      <div>
        <h2>Add new book</h2>
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <el-input v-model="form.title" placeholder="Book title" />
      <el-input v-model="form.author" placeholder="Book author" />
      <el-select
        v-model="form.categories"
        placeholder="Book categories"
        size="large"
        multiple
      >
        <el-option
          v-for="item in AVAILABLE_CATEGORIES"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <template #footer>
      <div>
        <el-button @click="handleSubmitCreateNewBook" type="primary"
          >Submit</el-button
        >
        <el-button @click="handleRestartForm" type="warning">Reset</el-button>
      </div>
    </template>
  </el-card>
</template>

<script lang="ts" setup>
const AVAILABLE_CATEGORIES = [
  "thriller",
  "history",
  "political",
  "crime",
  "horror",
];

const config = useRuntimeConfig();

const form = reactive({
  title: "",
  author: "",
  categories: [],
});

function handleRestartForm() {
  form.title = "";
  form.author = "";
  form.categories = [];
}

async function handleSubmitCreateNewBook() {
  try {
    await useFetch(`${config.public.baseURL}/api/books`, {
      method: "post",
      body: {
        ...form,
      },
    });

    handleRestartForm();
  } catch (ex) {
    console.error(ex);
  }
}
</script>
