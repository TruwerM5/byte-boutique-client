<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '../types/product';
import ProductsItemVue from './ProductsItemVue.vue';


 const props = defineProps<{
    data: any
 }>();



</script>

<template>
    <div class="products-list">
        <ProductsItemVue v-for="product,i in data" :key="product.id"
        :product="product" />
    </div>
</template>

<style lang="sass" scoped>
</style>