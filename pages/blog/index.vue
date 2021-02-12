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
                    <nuxt-link
                        :to="`/blog/` + post.slug"
                        class="text-decoration-none text-dark"
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
                            <b-card-text class="text-justify">
                                <div v-html="post.excerpt.rendered"></div>
                            </b-card-text>
                            <div class="d-flex justify-content-between">
                                <small>
                                    <span>{{
                                        new Intl.DateTimeFormat("en-US", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        }).format(new Date(post.date))
                                    }}</span>
                                </small>
                                <b-button
                                    variant="link"
                                    class="p-0 m-0 shadow-none"
                                    :to="`/blog/` + post.slug"
                                    >Read More...</b-button
                                >
                            </div>
                        </b-card>
                    </nuxt-link>
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
        let metas = this.data.head.meta.map((item) => {
            if (item.property == "og:url") {
                item.content = "https://diggimarknepal.com" + this.$route.path;
            }
            return item;
        });

        return {
            title: this.data.head.title,
            meta: metas,
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