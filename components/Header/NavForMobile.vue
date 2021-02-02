<template>
    <div class="nav__mobile d-sm-none" :class="[isActive ? 'active' : '']">
        <b-container class="mt-5 d-flex flex-column" style="height: 100%">
            <b-nav class="d-flex flex-column nav-mb w-100 mobile-nav">
                <b-nav-item to="/"> Home </b-nav-item>
                <b-nav-item to="/work"> Work </b-nav-item>
                <b-nav-item to="/work"> Blog</b-nav-item>
                <b-nav-item to="/career"> Career </b-nav-item>
                <b-nav-item to="/about"> About </b-nav-item>
                <b-nav-item to="/Contact"> Contact </b-nav-item>
            </b-nav>
            <b-button
                pill
                variant="light"
                class="shadow text-uppercase w-100 my-auto text-dark"
                style="letter-spacing: 0.1rem"
                to="/"
                >Start a Project</b-button
            >
        </b-container>
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
        355deg,
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

    a {
        color: #fff;
        text-decoration: none;
        width: 100%;
        margin: 10px 0;
        font-size: 1.3rem;
    }
}
</style>