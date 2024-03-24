<script setup lang="ts">
import { ref } from 'vue';
import type {Product} from '../types/product';

const props = defineProps<{product: Product}>();
</script>

<template>
    <div class="product-item flex">
        <RouterLink :to="{path: `/products/${product.id}` }">
            <img 
            :src="`http://localhost:3000/images/${product.images[0].url}`" 
            :alt="product.name"
            class="product-item__img">
        </RouterLink>
        
        <div class="product-item__info">
            <h4 class="product-item__name">
            {{ product.name }}
            </h4>
            <span class="product-item__price">
                {{ product.price }}
            </span>
        </div>
    </div>
</template>

<style scoped lang="sass">
.product-item
    &__img
        width: 150px
        height: 150px
</style>