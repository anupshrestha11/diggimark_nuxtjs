<template>
    <b-container class="py-5">
        <h2 class="text-center text-uppercase pt-5 pb-4">Our Team</h2>
        <b-row>
            <b-col cols="12" md="4" class="text-center p-2 mbr">
                <img
                    src="/person.jpg"
                    class="img-fluid"
                    style="
                        clip-path: circle();
                        object-fit: cover;
                        width: 300px;
                        height: 300px;
                        overflow: hidden;
                    "
                />
                <div class="text-center mt-2">
                    <h4>Mr. Henry Kane</h4>
                    <em>CEO</em>
                </div>
            </b-col>
            <b-col cols="12" md="4" class="text-center p-2 mbr">
                <img
                    src="/person.jpg"
                    class="img-fluid"
                    style="
                        clip-path: circle();
                        object-fit: cover;
                        width: 300px;
                        height: 300px;
                        overflow: hidden;
                    "
                />
                <div class="text-center mt-2">
                    <h4>Mr. Henry Kane</h4>
                    <em>CEO</em>
                </div>
            </b-col>
            <b-col cols="12" md="4" class="text-center p-2 mbr">
                <img
                    src="/person.jpg"
                    class="img-fluid"
                    style="
                        clip-path: circle();
                        object-fit: cover;
                        width: 300px;
                        height: 300px;
                        overflow: hidden;
                    "
                />
                <div class="text-center mt-2">
                    <h4>Mr. Henry Kane</h4>
                    <em>CEO</em>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
    mounted: () => {
        gsap.from(".mbr", {
            scrollTrigger: ".mbr",
            duration: 2,
            opacity: 0,
            y: 100,
            stagger: 0.2,
        });
    },
};
</script>

<style lang="scss" scoped>
</style>