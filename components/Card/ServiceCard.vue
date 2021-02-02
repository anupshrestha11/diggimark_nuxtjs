<template>
    <div class="h-100 p-5 text-white servicecard">
        <div class="overlay"></div>
        <span class="num">{{ id }}</span>
        <div class="d-flex flex-column h-100">
            <h3 class="title text-uppercase">{{ title }}</h3>
            <p class="text mt-auto mb-auto">{{ excert }}</p>
            <nuxt-link to="#" class="h1">
                <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id", "title", "excert"],
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
.servicecard {
    background: linear-gradient(0deg, #000000aa, #000000aa), url("/s1.jpg");
    background-size: cover;
    position: relative;
    z-index: 1;
    overflow: hidden;
    & > * {
        z-index: 1;
    }
    .overlay {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 180%;
            width: 400%;
            background: #3a3985;
            z-index: -1;
            transform: skewX(50deg);
            opacity: 0;
            transition: all 0.4s ease-in;
        }
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 180%;
            bottom: 0;
            right: 0;
            width: 400%;
            background: #3a3985;
            z-index: -1;
            transform: skewX(50deg);
            opacity: 0;
            transition: all 0.4s ease-in;
        }
        z-index: 0;
    }
    &:hover {
        .overlay {
            &::before {
                right: 45%;
                opacity: 1;
            }
            &::after {
                left: 54%;
                opacity: 1;
            }
        }
        a {
            animation: 1s linear 1s infinite alternate slide;
            color: #fff;
        }
        .text {
            opacity: 1;
            transform: translateX(0);
        }
    }
    .num {
        font-family: "Alfa Slab One", cursive;
    }
    .title {
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
        padding: 0 0 10px;
    }
    .text {
        font-size: 1rem;
        letter-spacing: 0.1rem;
        transform: translateX(-150%);
        opacity: 0;
        position: relative;
        transition: all 0.4s ease-in;
        padding: 50px 0;
        @media all and (min-width: 1200px) {
            width: 70%;
        }
        &::before {
            content: "";
            width: 50px;
            height: 3px;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;
            z-index: 1;
        }
    }
    a {
        color: #7e7cff;
        transition: color 0.3s ease-in;
    }
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(5px);
    }
}
</style>