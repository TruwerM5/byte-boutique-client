<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const username = ref('');
const password = ref('');


async function createAdmin() {
    const body = {
        login: username.value,
        password: password.value,
    };

    const headers = {
        'Content-Type': 'application/json'
    };

    await axios.post('/api/admin/create', JSON.stringify(body), {
        headers,
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.message);
    })


}

</script>

<template>
    <form class="flex flex-col gap-[20px] justify-center items-center h-full my-[30px]" @submit.prevent>
        <label for="username" class="flex">
            <span>Логин: </span>
            <input type="text" name="username" id="username" v-model="username"
            class="border-primary border-[1px] border-solid">
        </label>
        <label for="password" class="flex">
            <span>Пароль: </span>
            <input type="password" name="password" id="password" v-model="password"
            class="border-primary border-[1px] border-solid">
        </label>
        <button type="submit" @click="createAdmin">Войти</button>
    </form>
</template>

<style lang="sass" scoped>
</style>