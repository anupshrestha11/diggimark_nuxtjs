<template>
    <div class="nav__mobile d-sm-none" :class="[isActive ? 'active' : '']">
        <h1>Navbar</h1>
    </div>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.nav__mobile {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 100vw;
    background: linear-gradient(
        155deg,
        #3499ff 0%,
        #3e71cc 25%,
        #3e5eb4 50%,
        #3d4b9c 75%,
        #3a3985 100%
    );
    transition: left 0.3s ease-in-out;
    &.active {
        left: 0;
    }
}
</style>