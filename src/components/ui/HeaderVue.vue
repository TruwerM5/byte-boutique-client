<script setup lang="ts">
import {RouterLink} from 'vue-router';
import { useNavStore } from '../../stores/navStore';
import { useAuthStore } from '../../stores/authStore';

const navStore = useNavStore();
const authStore = useAuthStore();

</script>

<template>
    <header class="header bg-primary">
        <div class="header__inner flex">
            <div class="logo">
                <RouterLink to="/" class="logo__link flex items-center">
                    <img src="/images/logo.svg" class="logo__img max-w-[40px]" alt="ByteBootique">
                    <span class="logo__brand">Byte Bootique</span>
                </RouterLink>
            </div>
            <button class="header__burger burger" @click="navStore.navToggle">
                <span class="burger__item burger__item_1"></span>
                <span class="burger__item burger__item_2"></span>
                <span class="burger__item burger__item_3"></span>
            </button>
            <nav @click.stop="navStore.navToggle" 
            :class="['nav', {'opened': navStore.isOpened}]">
                <div class="nav__inner text-primary-dark">
                    <ul class="nav__list">
                        <li v-for="navitem,i in navStore.navLinks" :key="navitem.id" 
                        class="nav__item ">
                            <RouterLink :to="{path:'/categories/'+navitem.path}">
                                {{ navitem.name }}
                            </RouterLink>    
                        </li>
                    </ul>
                    <div class="nav__bottom">
                        <button @click="authStore.toggleForm" 
                        class="nav__btn">Войти</button>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="sass">
.header
    position: relative
    padding: 10px
    color: #fff
    &__inner
        align-items: center
        justify-content: space-between
.logo
    &__link
        gap: 10px
    &__brand
        font-family: "Maven Pro"
        font-size: 2.2rem
        font-weight: 500
        color: #fff

.burger
    position: relative
    width: 30px
    height: 20px
    margin-left: auto
    &__item
        position: absolute
        left: 0
        width: 100%
        height: 2px
        border-radius: 1px
        background-color: #fff
        transition: all .2s
        &_1
            top: 0
        &_2
            top: 50%
            transform: translateY(-50%)
        &_3
            bottom: 0

.nav
    position: fixed
    left: 110%
    top: 0
    width: 100%
    height: 100%
    font-family: "Exo 2"
    background-color: rgba(0,0,0, 0.3)
    transition: .3s background-color ease-in-out, .3s left ease-in-out
    z-index: 0
    &.opened
        left: 0
        z-index: 5
        .nav__inner
            left: 0
    &__inner
        position: relative
        left: 100%
        width: 90%
        height: 100%
        margin-left: auto
        padding: 50px 0px
        background-color: #fff
        transition-duration: .3s
        transition-delay: .2s
        transition-timing-function: ease-in-out
        transition-property: left
    &__list
        display: flex
        flex-direction: column
        gap: 10px
        padding: 0px 10px
    &__item
        font-size: 1.6rem
    &__bottom
        position: absolute
        width: 100%
        bottom: 0px
        z-index: 5
        padding-bottom: 10px
        display: flex
        justify-content: center
    &__btn
        padding: 10px 30px
        font-size: 1.6rem
        border: 1px solid $primary-dark
</style>