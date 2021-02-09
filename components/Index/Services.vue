<template>
    <div id="services">
        <h2 class="text-center text-uppercase pt-5 pb-4 mt-5 title">
            Our Services
        </h2>
        <b-row class="m-0 p-0">
            <b-col
                md="6"
                xl="3"
                sm="12"
                v-for="(service, idx) in services"
                :key="idx"
                class="m-0 p-0 service__card"
            >
                <ServiceCard
                    :id="`0` + (idx + 1)"
                    :title="service.title.rendered"
                    :excert="service.excerpt.rendered"
                    :image="
                        service.better_featured_image.media_details.sizes
                            .medium_large.source_url
                    "
                    :slug="service.slug"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapState } from "vuex";
export default {
    mounted: () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from("#services > .title", {
            scrollTrigger: {
                trigger: "#services > .title",
            },
            opacity: 0,
            duration: 3,
            x: "-100%",
            ease: "back",
        });
        gsap.from(".service__card", {
            scrollTrigger: {
                trigger: "#services > .title",
                start: "top center",
            },
            opacity: 0,
            duration: 1,
            y: 100,
            stagger: 0.3,
        });
    },

    computed: {
        ...mapState(["services"]),
    },
};
</script>

<style lang="scss" scoped>
</style>