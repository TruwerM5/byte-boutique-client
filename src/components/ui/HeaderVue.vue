<script setup lang="ts">
import {RouterLink} from 'vue-router';
import { useNavStore } from '../../stores/navStore';
const navStore = useNavStore();

</script>

<template>
    <header class="header bg-primary">
        <div class="header__inner flex">
            <div class="logo">
                <RouterLink to="/" class="logo__link flex items-center">
                    <img src="/images/logo.svg" class="logo__img max-w-[50px]" alt="ByteBootique">
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
                <ul class="nav__list">
                    <li v-for="navitem,i in navStore.navLinks" :key="navitem.id" 
                    class="nav__item text-primary-dark">
                        <RouterLink :to="'/products'+navitem.path">
                            {{ navitem.name }}
                        </RouterLink>
                    </li>
                </ul>
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
        font-size: 3rem
        font-weight: 500
        color: #fff

.burger
    position: relative
    width: 35px
    height: 25px
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
    &.opened
        left: 0
        .nav__list
            left: 0

    &__list
        position: relative
        left: 100%
        width: 90%
        height: 100%
        display: flex
        flex-direction: column
        gap: 5px
        margin-left: auto
        padding: 50px 10px
        background-color: #fff
        transition-duration: .3s
        transition-delay: .2s
        transition-timing-function: ease-in-out
        transition-property: left
    &__item
        font-size: 2rem
</style>