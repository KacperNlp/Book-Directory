<template>
  <el-card>
    <template #header>
      <div>
        <h2>Card name</h2>
      </div>
    </template>
    <div>
      <el-input v-model="form.bookTitle" placeholder="Book title" />
    </div>
    <template #footer>
      <div>
        <el-button type="primary">Submit</el-button>
        <el-button type="warning">Reset</el-button>
      </div>
    </template>
  </el-card>
</template>

<script lang="ts" setup>
const form = reactive({
  bookTitle: "",
});
</script>
