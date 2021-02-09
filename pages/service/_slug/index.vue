<template>
    <section class="bg-white">
        <SmallHero
            :title="service.title.rendered"
            :image="service.better_featured_image.source_url"
        />
        <b-container class="py-5">
            <div>
                <div
                    class="text-justify"
                    v-html="service.content.rendered"
                ></div>

                <!-- <b-row>
                    <b-col cols="12">
                        <h5 class="text-center">Some of Example Work</h5>
                    </b-col>
                    <b-col cols="12" md="6" lg="4" v-for="i in 5" :key="i">
                        <WorkCard title="Diitial tesla" tags="SEO" />
                    </b-col>
                </b-row> -->
            </div>
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    async fetch({ store, params }) {
        await store.dispatch("loadSingleService", {
            slug: params.slug,
        });
    },
    computed: {
        ...mapState(["service"]),
    },
};
</script>

<style>
</style>