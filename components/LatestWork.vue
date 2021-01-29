<template>
    <div>
        <h3 class="text-center text-uppercase pt-5 mt-5 ltw" id="latest-work">
            Work For Our Clients
        </h3>
        <b-container fluid>
            <b-row>
                <b-col
                    md="6"
                    lg="4"
                    xl="3"
                    class="m-0 p-0 work__card"
                    v-for="(work, idx) in works"
                    :key="idx"
                >
                    <WorkCard :title="work.title" :tags="work.tags" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
    data() {
        return {
            works: [
                {
                    title: "GTZ Online Shop",
                    tags: "Online Shop",
                },
                {
                    title: "Travel 24 Website",
                    tags: "Web Desgin + Development",
                },
                {
                    title: "Travel 24 Website",
                    tags: "Marketing, SEO",
                },
                {
                    title: "Travel 24 Website",
                    tags: "Online Shop, Marketing, SEO",
                },
                {
                    title: "Travel 24 Website",
                    tags: "SEO",
                },
                {
                    title: "Travel 24 Website",
                    tags: "Marketing",
                },
            ],
        };
    },
    mounted: () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".work__card", {
            scrollTrigger: {
                trigger: ".work__card",
                start: "top center",
            },
            opacity: 0,
            duration: 1,
            y: 100,
            stagger: 0.3,
        });
    },
};
</script>

<style>
</style>