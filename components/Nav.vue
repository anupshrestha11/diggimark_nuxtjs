<template>
    <client-only>
        <b-navbar-nav class="ml-auto d-none d-sm-flex">
            <b-nav-item class="main-link" to="/"> Home </b-nav-item>
            <b-nav-item class="main-link" to="/work"> Work </b-nav-item>
            <b-nav-item class="main-link" to="/blog"> Blog </b-nav-item>
            <b-nav-item class="main-link" to="/career"> Career </b-nav-item>
            <b-nav-item class="main-link" to="/Contact"> Contact </b-nav-item>
            <b-nav-item class="main-link" to="/about"> About </b-nav-item>
        </b-navbar-nav>
    </client-only>
</template>


<script>
export default {};
</script>

<style lang="scss" >
.main-link {
    a {
        color: #fff;
        transition: all 0.1s ease;
        font-weight: bold;
        margin: 0 10px;
        position: relative;
        &::before {
            z-index: -1;
            content: "";
            width: 100%;
            height: 0;
            background: #3a3985dd;
            position: absolute;
            bottom: 50%;
            left: 0;
            transform: translateY(50%);
            transition: all 0.3s ease-in;
        }
        &:hover {
            position: relative;
            z-index: 1;
            &::before {
                height: 80%;
                transform: skewY(-10deg) translateY(50%);
            }
        }
        &.nuxt-link {
            font-weight: bold;
            &-exact-active {
                position: relative;
                font-weight: bold;
                z-index: 10;

                &::before {
                    z-index: -1;
                    content: "";
                    width: 100%;
                    height: 80%;
                    background: #3a3985;
                    position: absolute;
                    bottom: 50%;
                    left: 0;
                    transform: skewY(-10deg) translateY(50%);
                }
            }
        }
    }
}
.scrolled {
    .main-link {
        a {
            &::before {
                background: #fff;
            }
            &:hover {
                color: #3a3985;
            }
            &.nuxt-link {
                &-exact-active {
                    color: #3a3985;
                }
            }
        }
    }
}
</style>