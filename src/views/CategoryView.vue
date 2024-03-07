<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const route = useRoute();

const data = ref()

async function getByCategory(category: string | string[]) {
    const request = await axios.get(`/api/products/${category}`);
    const response = await request.data;
    data.value = response;
}


getByCategory(route.params.category)


</script>

<template>
    <h1>{{ data }}</h1>
</template>