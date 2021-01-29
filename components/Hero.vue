<template>
    <div class="hero">
        <video
            autoplay
            muted
            loop
            id="video"
            class="rellax"
            data-rellax-speed="-10"
            poster="/s1.jpg"
        >
            <source src="/bg2.mp4" type="video/mp4" />
            <source src="/bg1.mp4" type="video/mp4" />
        </video>
        <transition name="custom">
            <b-container fluid class="text-white content px-xl-5">
                <div class="rellax" data-rellax-speed="-3">
                    <div class="heading">
                        <h1 class="text-uppercase display-4" id="title">
                            {{ title }}
                        </h1>
                        <p class="" id="slogan">
                            {{ description }}
                        </p>
                    </div>
                    <div class="btn__group">
                        <b-button
                            pill
                            class="bg-white text-dark text-uppercase"
                            tag="nuxt-link olw"
                            to="#latest-work"
                        >
                            Our Latest Work
                        </b-button>
                        <b-button
                            pill
                            variant="primary"
                            class="text-uppercase sat"
                            to="#"
                        >
                            Start A Project
                        </b-button>
                    </div>
                </div>
            </b-container>
        </transition>
    </div>
</template>

<script>
var Rellax = require("rellax");

import gsap from "gsap";
export default {
    props: ["title", "description"],
    mounted: function () {
        gsap.from("#title", { opacity: 0, duration: 2, x: -500 });
        gsap.from("#slogan", { opacity: 0, duration: 2, x: 500, delay: 1 });
        gsap.from(".btn__group .btn", {
            opacity: 0,
            duration: 2,
            delay: 1,
            stagger: 0.3,
        });
        var rellax = new Rellax(".rellax");
    },
};
</script>

<style lang="scss" scoped>
.hero {
    height: 100vh;
    overflow: hidden;
    padding: 0;
    margin: 0;
}
.klsdlf {
    background: linear-gradient(
        155deg,
        #3499ffda 0%,
        #3e71ccc2 25%,
        #3e5eb4b4 50%,
        #3d4b9caa 75%,
        #3a3985a1 100%
    );
}
#video {
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 0;
    margin: 0;
    object-fit: cover;
}
.content {
    position: absolute;
    background: linear-gradient(
        155deg,
        #3499ffda 0%,
        #3e71ccc2 25%,
        #3e5eb4b4 50%,
        #3d4b9caa 75%,
        #3a3985a1 100%
    );
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > * {
        display: block;
    }
    .heading {
        & > p {
            font-size: 1.2rem;
        }
    }
    .btn__group {
        a {
            display: flex;
            flex-direction: column;
            margin: 15px 0;
        }
    }
    @media all and (min-width: 600px) {
        text-align: left;
        top: 0;
        bottom: 0;
        .btn__group {
            a {
                display: inline-block;
            }
        }
    }
    @media all and (min-width: 700px) {
        top: 0;
        bottom: 0;
        .btn__group {
            margin-top: 30px;
            .btn {
                font-weight: bold;
                letter-spacing: 0.1rem;
                line-height: 1.5rem;
                &:nth-of-type(1) {
                    margin-right: 10px;
                }
                &:nth-of-type(2) {
                    margin-left: 10px;
                }
            }
        }
        .heading {
            line-height: 1.5rem;
            letter-spacing: 0.1rem;
            & > h1 {
                font-size: 4rem;
            }
            & > p {
                font-size: 1.5rem;
            }
        }
    }
}
</style>