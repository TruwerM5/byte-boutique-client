<script setup lang="ts">
import {LocationQueryValue, useRoute, useRouter, onBeforeRouteUpdate} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const route = useRoute();

const data = ref()

async function getByCategory(category: LocationQueryValue | LocationQueryValue[]) {
    const request = await axios.get(`/api/products/${category}`);
    const response = await request.data;
    data.value = response;
}


getByCategory(route.params.category);

console.log(route.params.category);


onBeforeRouteUpdate( async (to, from) => {
    data.value = '';
    await getByCategory(to.params.category);
})


</script>

<template>
    <h1>{{ data }}</h1>
</template>