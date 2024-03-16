<script setup lang="ts">
import { ref, reactive } from 'vue';
import axios from 'axios';
import PrimaryButtonVue from '@/components/ui/PrimaryButtonVue.vue';

type ProductDetails = {
    id: number;
    key: string;
    value: string;
}

let nextId = 1;

let productDetails = ref<ProductDetails[]>([]);
const name = ref('');
const price = ref<number>();
const discount = ref<number>();
const brand = ref('');
const categories = reactive([
    'motherboards', 'cpu', 
    'ram', 'powerunits', 
    'graphiccards', 'hdd',
    'fans', 'cases',
    'monitors', 'keyboards',
    'mouses', 'speakers',
    'headphones', 'consoles',
    'gamepads', 'accessories',
]);
const selected = ref('motherboards');

function addFields() {
    productDetails.value.push({
        id: nextId,
        key: '',
        value: ''
    });
    nextId++;
}
function deleteFields(id: number) {
    console.log(id);
    productDetails.value = productDetails.value.filter(item => item.id != id);
} 

function validateProductDetails() {

    productDetails.value = productDetails.value.filter((item) => {
        return item.key != '' && item.value != '';
    });

}

function stringify() {

    validateProductDetails();

    let json = {
        name: name.value,
        price: price.value,
        discount: discount.value,
        brand: brand.value,
        category: selected.value,
        details: productDetails.value
    }

    return JSON.stringify(json);
}

async function createProduct() {
    const data = stringify();
}


</script>

<template>
    <form class="create-product form">
        <h3 class="create-product__title">Создание продукта</h3>
        <label for="product_name" class="create-product__label">
            <span class="create-product__text form__text">Имя</span>
            <input type="text" name="product_name" class="product__input form__input"
            id="product_name" 
            v-model="name">
        </label>
        <label for="product_price" class="create-product__label">
            <span class="create-product__text form__text">Цена</span>
            <input type="text" name="product_price" class="product__input form__input"
            id="product_price"
            v-model="price">
        </label>
        <label for="product_brand" class="create-product__label">
            <span class="create-product__text form__text">Бренд</span>
            <input type="text" name="product_brand" class="product__input form__input"
            id="product_brand"
            v-model="brand">
        </label>
        <label for="product_discount" class="create-product__label">
            <span class="create-product__text form__text">Скидка</span>
            <input type="text" name="product_discount" class="product__input form__input"
            id="product_discount"
            v-model="discount">
        </label>
        <label for="product_category" class="create-product__label">
            <span class="create-product__text form__text">Категория</span>
            <select name="product_category" 
            id="product_category" 
            v-model="selected"
            class="form__input">
                <option v-for="category,i in categories" :key="i"
                :selected="category == 'motherboards'"
                :value="category">{{ category }}</option>
            </select>
        </label>
        <label for="product_images" class="create-product__label">
            <span class="create-product__text form__text">Изображения</span>
            <input type="file" name="product_images" id="product_images" multiple required>
        </label>
        <div class="create-product__details details flex flex-col">
            <span class="details__title">Доп. информация</span>
            <div v-for="detail,index in productDetails" :key="index" 
            class="details__item flex flex-col gap-[10px]">
                <div class="details__key details-key">
                    <span class="details-key__text form__text">Название поля</span>
                    <input type="text" 
                    v-model="detail.key"
                    class="form__input">
                    <button 
                    class="details__delete-btn" @click="deleteFields(detail.id)">
                        <img src="/images/delete-icon.png" alt="Delete">
                    </button>
                </div>
                <div class="details__value details-value">
                    <span class="details-value__text form__text">Значение поля</span>
                    <input type="text"
                    v-model="detail.value"
                    class="form__input">
                </div>
            </div>
            <!-- <table class="details__table">
                <thead>
                    <tr>
                        <th class="table__head">Название поля</th>
                        <th class="table__head">Значение поля</th>
                        <th>Добавить</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="detail,index in productDetails" :key="index" 
                    class="details__row">
                        <td class="details__col">
                            <input type="text" 
                            v-model="detail.key"
                            class="form__input">
                        </td>
                        <td class="details__col">
                            <input type="text" 
                            v-model="detail.value"
                            class="form__input">
                        </td>
                    </tr>
                </tbody>
            </table> -->
            <button
            @click="addFields" 
            class="details__add-btn">Добавить</button>
        </div>
        <PrimaryButtonVue
        :title="'Создать'"
        @click="stringify"
        class="w-full"
        />
    </form>
</template>

<style lang="sass" scoped>
.create-product
    width: fit-content
    margin: 0 auto
    display: flex
    flex-direction: column
    justify-content: center
    &__title
        font-size: 3rem
        font-family: 'Exo 2'
        text-align: center
    &__label
        width: 100%

.details
    margin-top: 30px
    &__key
        position: relative
    &__delete-btn
        position: absolute
        right: 0
        top: 50%
        transform: translateX(-50%)
        width: 18px
    &__add-btn
        padding: 10px 30px
        margin-block: 20px
        font-size: 1.6rem
        color: $primary-blue
        border: 1px solid $primary-blue
    &__title
        font-size: 2rem
        font-family: 'Exo 2'
        text-align: center
</style>