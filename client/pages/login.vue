<template>
  <section class="h-full flex justify-center items-center">
    <div class="w-full max-w-96 bg-red-100">
      <el-card>
        <h1 class="text-center mb-4 font-semibold text-blue-500">
          Zaloguj się
        </h1>
        <el-form :model="form" label-width="auto">
          <el-form-item label="Nick">
            <el-input v-model="form.nick" />
          </el-form-item>
          <el-form-item label="Hasło">
            <el-input v-model="form.password" type="password" autocomplete="off" />
          </el-form-item>
          <div class="mt-6 flex flex-col gap-6 justify-center">
            <el-button type="primary" @click="onSubmit">Zaloguj</el-button>
            <div class="flex flex-col items-center gap-2 text-sm">
              <span>Nie masz konta?</span>
              <nuxt-link to="/register" class="hover:text-blue-500">Zarejestruj się</nuxt-link>
            </div>
          </div>
        </el-form>
      </el-card>
    </div>
  </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

const form = reactive({
  nick: "",
  password: "",
});

async function onSubmit() {
  try {
    await useFetch(`${config.public.baseURL}/api/auth/login`, {
      method: "POST",
      body: {
        ...form,
      },
    });

    navigateTo("/");
  } catch (ex) {
    console.error(ex);
  }
}
</script>
