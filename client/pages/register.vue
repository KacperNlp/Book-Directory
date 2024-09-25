<template>
  <section class="h-full flex justify-center items-center">
    <div class="w-full max-w-96 bg-red-100">
      <el-card>
        <h1 class="text-center mb-4 font-semibold text-blue-500">
          Zarejestruj się
        </h1>
        <el-form :model="form" label-width="auto">
          <el-form-item label="Imię">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Nazwisko">
            <el-input v-model="form.surname" />
          </el-form-item>
          <el-form-item label="Nick">
            <el-input v-model="form.nick" />
          </el-form-item>
          <el-form-item label="E-mail">
            <el-input v-model="form.email" type="email" />
          </el-form-item>
          <el-form-item label="Hasło">
            <el-input
              v-model="form.password"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <div class="mt-6 flex flex-col gap-6 justify-center">
            <el-button type="primary" @click="onSubmit">Rejestruj</el-button>
            <div class="flex flex-col items-center gap-2 text-sm">
              <span>Masz już kont?</span>
              <nuxt-link to="/register" class="hover:text-blue-500"
                >Zaloguj się</nuxt-link
              >
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
  name: "",
  surname: "",
  email: "",
  nick: "",
  password: "",
});

async function onSubmit() {
  try {
    await useFetch(`${config.public.baseURL}/api/auth/register`, {
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
