<template>
    <section class="bg-white">
        <SmallHero
            :title="post.title.rendered"
            :image="post.better_featured_image.source_url"
        />
        <b-container class="py-5">
            <h1 v-html="post.title.rendered"></h1>
            <div class="pb-2">
                <p>
                    Published on:
                    <span>{{
                        new Intl.DateTimeFormat("en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        }).format(new Date(post.date))
                    }}</span>
                </p>
            </div>
            <div
                class="text-justify post-content"
                v-html="post.content.rendered"
            ></div>
            <div id="disqus_thread"></div>
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
    mounted: () => {
        var d = document,
            s = d.createElement("script");
        s.src = "https://diggimark.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
    },

    async fetch({ store, params }) {
        await store.dispatch("loadSinglePost", {
            slug: params.slug,
        });
    },
    computed: {
        ...mapState(["post"]),
    },
    head() {
        return {
            title: this.post.head.title,
            meta: [...this.post.head.meta],
        };
    },
};
</script>

<style lang="scss" >
.post-content {
    figure {
        margin: 10px auto;
        img {
            width: 100% !important;
            object-fit: contain;
            margin: 0 auto;
        }
        figcaption {
            margin: 10px auto;
            text-align: center;
        }
    }
}
</style>