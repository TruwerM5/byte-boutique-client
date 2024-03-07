<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import HeaderVue from './components/ui/HeaderVue.vue';
async function getHello() {
  const response = await axios.get('/api/users');
  const data = await response.data;
  console.log(data);
}

getHello();


</script>

<template>
  <HeaderVue />
  <RouterView />
</template>

<style scoped lang="sass">

</style>
