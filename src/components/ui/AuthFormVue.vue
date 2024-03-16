<script setup lang="ts">
import { useAuthStore } from '../../stores/authStore';
import PrimaryButtonVue from './PrimaryButtonVue.vue';

const authStore = useAuthStore();

</script>

<template>
    <div 
    :class="['overlay flex items-center justify-center', {'active': authStore.isFormOpened}]"
    @click.self="authStore.toggleForm">
        
        <form @submit.prevent class="auth">
            <span v-if="authStore.errorMessage.length" class="error">
                {{ authStore.errorMessage }}
            </span>
            <template v-if="authStore.action == 'login'">
                <h3 class="auth__title">Вход</h3>
                <label for="email" class="auth__label">
                    <input type="text" name="email" v-model="authStore.email"
                    id="email" class="auth__input">
                    <span :class="['auth__text', {'move-to-top': authStore.email.length > 0}]">Email</span>
                </label>
                <label for="password" class="auth__label">
                    <input type="password" name="password" v-model="authStore.login_password"
                    id="login_password" class="auth__input">
                    <span :class="['auth__text', {'move-to-top': authStore.login_password.length > 0}]">Пароль</span>
                </label>
                <PrimaryButtonVue
                :title="'Войти'"
                type="submit"
                @click="authStore.login"
                class="mt-[20px] rounded-[6px]" />
                <button @click="authStore.switchForm('signup')" 
                class="auth__toggle-form-btn">
                    Зарегистрироваться
                </button>
            </template>
            <template v-else-if="authStore.action == 'signup'">
                <h3 class="auth__title">Регистрация</h3>
                <label for="email" class="auth__label">
                    <input type="text" name="auth_email" 
                    v-model="authStore.email" 
                    @keyup="authStore.validateSignUpCredentials"
                    class="auth__input" id="auth_signup_email" autocomplete="email">
                    <span :class="['auth__text', {'move-to-top': authStore.email.length > 0}]">Email</span>
                </label>
                <label for="username" class="auth__label">
                    <input type="text" name="auth_usernama" v-model="authStore.username"
                    class="auth__input" id="auth_username" autocomplete="username">
                    <span :class="['auth__text', {'move-to-top': authStore.username.length > 0}]">Имя</span>
                </label>
                <label for="password" class="auth__label">
                    <input type="password" name="auth_password"
                    v-model="authStore.signup_password"
                    @keyup="authStore.validateSignUpCredentials"
                    class="auth__input" id="auth_signup_password">
                    <span :class="['auth__text', {'move-to-top': authStore.signup_password.length > 0}]">Пароль</span>
                </label>
                <label for="password" class="auth__label">
                    <input type="password" name="auth_signup_repeat_password"
                    v-model="authStore.signup_repeat_password"
                    @keyup="authStore.validateSignUpCredentials"
                    class="auth__input" id="auth_signup_repeat_password">
                    <span :class="['auth__text', {'move-to-top': authStore.signup_repeat_password.length > 0}]">Повторите пароль</span>
                </label>
                <PrimaryButtonVue
                :title="'Зарегистрироваться'"
                @click="authStore.signUp"
                type="submit"
                class="mt-[20px] rounded-[6px]" />
                <button @click="authStore.switchForm('login')" 
                class="auth__toggle-form-btn">
                    Войти
                </button>
            </template>
            <button @click="authStore.toggleForm" 
            class="auth__close-form-btn">
                <img src="/images/close-icon.png" alt="Close">
            </button>
        </form>
    </div>
</template>

<style lang="sass" scoped>

.auth
    position: relative
    display: flex
    flex-direction: column
    gap: 25px
    padding: 30px 25px 25px 25px
    background-color: #fff
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.3)
    border-radius: 10px
    &__title
        font-size: 2rem
        text-align: center
        font-family: 'Exo 2'
    &__label
        position: relative
    &__text
        position: absolute
        bottom: 50%
        transform: translateY(50%)
        padding-inline: 5px
        color: #96a3ae
        font-size: 1.6rem
        font-family: 'Roboto'
        transition: .2s font-size ease-in-out, .2s bottom ease-in-out, .2s transform ease-in-out, .2s color ease-in-out
    &__input
        font-size: 1.6rem
        font-family: 'Roboto'
        border: 2px solid #b3bcc5
        border-radius: 6px
        padding: 10px 10px 6px
        outline: none   
        &:focus
            border-color: $primary-blue
            & + .auth__text
                bottom: 100%
                transform: translateY(0)
                font-size: 1.4rem
                color: $primary-blue
    &__toggle-form-btn
        font-size: 1.4rem
        font-family: 'Exo 2'
        color: $primary-blue
    &__close-form-btn
        position: absolute
        top: 10px
        right: 10px

.move-to-top
    bottom: 100%
    transform: translateY(0)
    font-size: 1.4rem
    color: $primary-blue

.error
    position: absolute
    bottom: 100%
    left: 0
    width: 100%
    font-size: 1.8rem
    color: #ff3333
    text-align: center
</style>