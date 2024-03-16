<script setup lang="ts">

import { ref } from 'vue';
import { useButtonStore } from '@/stores/button';
import { useAuthStore } from '@/stores/authStore';
const props = defineProps<{
    title: string;
    
}>();

const btnStore = useButtonStore();
const authStore = useAuthStore();
</script>

<template>
    <button :class="['button_primary', {'pending': authStore.btnAction == 'pending'}]">
        <span v-if="btnStore.action == 'pending'" class="button__circle flex justify-center max-h-full">
            <img src="/images/button-pending.png" alt="Loading" class="object-contain">
        </span>
        <span v-else class="button__title">
            {{ title }}
        </span>
    </button>
</template>

<style lang="sass" scoped>

.button
    &__circle
        animation: 1s linear 0s infinite running rotate

@keyframes rotate
    0%
        transform: rotate(0)
    100%
        transform: rotate(360deg)

.pending
    background-color: rgba(80, 80, 80, 0.3)

</style>