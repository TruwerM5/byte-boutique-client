<script setup lang="ts">
import { useRoute, useRouter, onBeforeRouteUpdate, type RouterOptions, type RouteLocationNormalizedLoaded } from 'vue-router';
import { useProductStore } from '@/stores/products';
import { ref } from 'vue';
import type { Product, ProductWithDetails, ProductDetails } from '@/types/product';
import type { AxiosError } from 'axios';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const productData = ref<Product | ProductWithDetails>();
const productDetails = ref<ProductDetails>();
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

onBeforeRouteUpdate(fetchProduct);

async function fetchProduct(to: RouteLocationNormalizedLoaded) {
    try {
        productData.value = productStore.getProductFromCache(+to.params.id);
        if(!productData.value) {
            console.log("Not Found from cache");
            productData.value = await productStore.getProduct(to.params.id);
            console.log(productData.value);
        } else {
            console.log("From cache");
        }
        productDetails.value = await productStore.getProductDetails(to.params.id);
        
        
    } catch(err: any) {
        console.log(err.message);
    }
}   

fetchProduct(route);

</script>

<template>
    <div class="product-details">
        <h1>Product id {{ id }}</h1>
    </div>
</template>
