<template>
    <b-navbar-nav class="ml-auto d-none d-sm-flex">
        <b-nav-item class="main-link" to="/"> Home </b-nav-item>
        <b-nav-item class="main-link" to="/work"> Work </b-nav-item>
        <b-nav-item class="main-link" to="/blog"> Blog </b-nav-item>
        <b-nav-item class="main-link" to="/career"> Career </b-nav-item>
        <b-nav-item class="main-link" to="/Contact"> Contact </b-nav-item>
        <b-nav-item class="main-link" to="/about"> About </b-nav-item>
    </b-navbar-nav>
</template>


<script>
import gsap from "gsap";
export default {
    mounted: () => {
        gsap.from(".main-link", {
            opacity: 0,
            y: -100,
            duration: 1,
            stagger: 0.2,
        });
    },
};
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
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
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
    @media all and (min-width: 1200px) {
        font-size: 1.1rem;
        margin: 0 1.5rem;
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