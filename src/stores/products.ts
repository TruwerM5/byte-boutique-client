import { defineStore } from "pinia";
import axios from "axios";
import type { Product, ProductWithDetails, ProductDetails } from "@/types/product";
export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            
            products: <Product[]>([]),
        }
    },
    actions: {
        async listProductsByCategory(category: string | string[]): Promise<any> {
            const { data } = await axios.get(`/api/products/categories/${category}`);
            return data;
        },
        async getProductDetails(id: string | string[]): Promise<ProductDetails> {
            const req = await axios.get(`/api/products/${id}/details`);
            const {data} = req;
            return data;
        },
        async getProduct(id: string | string[]): Promise<ProductWithDetails> {
            const req = await axios.get(`/api/products/${+id}`);
            const {data} = req;
            return data;
        },
        cacheProducts(data: ProductWithDetails[]) {
            data.forEach(product => {
                this.products.push(product);
            });
            console.log(this.products);
        },
        getProductFromCache(id: number): Product | undefined {
            return this.products.find(product => product.id == id);
        }
    }
})