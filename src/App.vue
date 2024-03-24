<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import HeaderVue from './components/ui/HeaderVue.vue';
import AuthFormVue from './components/ui/AuthFormVue.vue';

</script>

<template>
  <HeaderVue />
  <RouterView />
  <AuthFormVue />
</template>

<style scoped lang="sass">

</style>
