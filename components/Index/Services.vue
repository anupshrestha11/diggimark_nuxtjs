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
                v-for="service in services"
                :key="service.id"
                class="m-0 p-0 service__card"
            >
                <ServiceCard
                    :id="service.id"
                    :title="service.title"
                    :excert="service.excert"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
    data() {
        let services = [
            {
                id: "01",
                title: "Paid Marketing",
                excert:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod numquam sint autem dolorem rem illo mollitia ullam obcaecati aperiam explicabo.",
            },
            {
                id: "02",
                title: "Exclusive SEO",
                excert:
                    "Lorem ips elit. Quod numquam sint autem dolorem rem illo mollitia ullam obcaecati aperiam explicabo.",
            },
            {
                id: "03",
                title: "Web Desgin & Development",
                excert:
                    "Lorem ips amet consectetur adipisicing elit. Quod numquam sint autem dolorem rem illo mollitia ullam obcaecati aperiam explicabo.",
            },
            {
                id: "04",
                title: "Brand + Identity",
                excert: "Lorem ipsum aperiam explicabo.",
            },
        ];

        return { services };
    },
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
};
</script>

<style lang="scss" scoped>
</style>