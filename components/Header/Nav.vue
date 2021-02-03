<template>
    <b-navbar-nav class="ml-auto d-none d-sm-flex">
        <b-nav-item class="main-link" to="/"> Home </b-nav-item>
        <b-dropdown id="services" text="Services" class="main-link">
            <client-only>
                <b-dropdown-item>
                    <nuxt-link to="/service/test" class="service-item"
                        >Exclusive SEO</nuxt-link
                    >
                </b-dropdown-item>
                <b-dropdown-item>
                    <nuxt-link to="/service/test" class="service-item"
                        >Paid Marketing</nuxt-link
                    >
                </b-dropdown-item>
                <b-dropdown-item>
                    <nuxt-link to="/service/test" class="service-item"
                        >Web Design + Development</nuxt-link
                    >
                </b-dropdown-item>
                <b-dropdown-item>
                    <nuxt-link to="/service/test" class="service-item"
                        >SEO</nuxt-link
                    >
                </b-dropdown-item>
            </client-only>
        </b-dropdown>
        <b-nav-item class="main-link" to="/blog"> Blog </b-nav-item>
        <b-nav-item class="main-link" to="/career"> Career </b-nav-item>
        <b-nav-item class="main-link" to="/Contact"> Contact </b-nav-item>
        <b-nav-item class="main-link" to="/about"> About </b-nav-item>
    </b-navbar-nav>
</template>


<script>
import gsap from "gsap";
export default {
    data() {
        return {
            show: false,
        };
    },
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
    & > a {
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
        a,
        #services__BV_toggle_ {
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

#services__BV_toggle_ {
    color: #fff;
    background: transparent;
    border: unset;
    transition: all 0.1s ease;
    font-weight: bold;
    outline: unset;
    box-shadow: none;
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
}
.dropdown-item {
    width: 100%;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    a {
        width: 100%;
        color: #3a3985dd;
        text-decoration: none;
    }
    &:hover {
        background: #3a3985dd;
        a {
            color: #fff !important;
        }
    }
}
.dropdown:hover .dropdown-menu {
    display: block;
}
</style>