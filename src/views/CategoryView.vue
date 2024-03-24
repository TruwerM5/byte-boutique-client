<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate} from 'vue-router';
import { ref } from 'vue';
import { useProductStore } from '@/stores/products';
import ProductsListVue from '@/components/ProductsListVue.vue';


const route = useRoute();
const productStore = useProductStore();
const data = ref<any>();

async function fetchProducts(category: string | string[]) {
    data.value = await productStore.listProductsByCategory(category);
    productStore.cacheProducts(data.value);
}

onBeforeRouteUpdate(async (to, from) => {
    data.value = null;
    data.value = await fetchProducts(to.params.category);
    
});


fetchProducts(route.params.category);


</script>

<template>
    
    <div class="category-view">
        <ProductsListVue :data="data" />
    </div>
</template>