<template>
    <section class="bg-white">
        <SmallHero title="Blog" image="bg1.jpg" />

        <b-container class="py-5">
            <h2>Latest Posts</h2>
            <hr />
            <b-row>
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                    v-for="post in posts"
                    :key="post.id"
                >
                    <b-card
                        :title="post.title.rendered"
                        :img-src="
                            post.better_featured_image.media_details.sizes
                                .medium_large.source_url
                        "
                        img-alt="post image"
                        tag="article"
                        class="my-4"
                    >
                        <b-card-text
                            class="text-justify"
                            v-html="post.excerpt.rendered"
                        >
                        </b-card-text>
                        <b-button
                            variant="link"
                            class="p-0 m-0 shadow-none"
                            :to="`/blog/` + post.slug"
                            >Read More...</b-button
                        >
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <LetsChat />
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    head() {
        return {
            title: this.data.head.title,
            meta: this.data.head.meta,
        };
    },

    async fetch({ store }) {
        await store.dispatch("loadData", { pageid: 23 });
        await store.dispatch("loadPosts");
    },
    computed: {
        ...mapState(["data", "posts"]),
    },
};
</script>

<style>
</style>