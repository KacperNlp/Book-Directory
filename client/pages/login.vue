<template>
    <section class="h-full flex justify-center items-center">
        <div class="w-full max-w-96 bg-red-100">
            <el-card>
                <h1 class="text-center mb-4 font-semibold text-blue-500">Zaloguj się</h1>
                <el-form :model="form" label-width="auto">
                    <el-form-item label="Imię">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="Hasło">
                        <el-input v-model="form.password" type="password" autocomplete="off" />
                    </el-form-item>
                    <div class="mt-6 flex justify-center">
                        <el-button type="primary" @click="onSubmit">Zaloguj</el-button>
                    </div>
                </el-form>
            </el-card>
        </div>
    </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

const form = reactive({
    name: '',
    password: ''
})

async function onSubmit() {
    try {
        await useFetch(`${config.public.baseURL}/api/auth/login`, {
            method: 'POST',
            body: {
                ...form
            }
        });
    } catch (ex) {
        console.error(ex)
    }
}
</script>