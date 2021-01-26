<template>
    <b-navbar
        fixed="top"
        class="d-flex justify-content-between align-items-center"
    >
        <b-navbar-brand>
            <nuxt-link to="/"> <Logo /> </nuxt-link>
        </b-navbar-brand>
        <BurgerButton :isActive="isActive" :toggleActive="toggleActive" />
        <b-navbar-nav class="ml-auto d-none d-sm-block">
            <b-nav-item>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/">Work</nuxt-link>
                <nuxt-link to="/">Career</nuxt-link>
                <nuxt-link to="/">Contact</nuxt-link>
            </b-nav-item>
        </b-navbar-nav>
        <NavForMobile :isActive="isActive" />
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style>
</style>