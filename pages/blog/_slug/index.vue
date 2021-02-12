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
export default {
    async asyncData({ $axios, params, error }) {
        try {
            let response = await $axios.get("/wp/v2/posts?slug=" + params.slug);
            let post = response.data[0];
            if (!post) {
                throw {
                    statusCode: 404,
                    message: "THIS PAGE COULD NOT BE FOUND",
                };
            }
            return {
                post,
            };
        } catch (e) {
            error(e);
        }
    },

    mounted: () => {
        var d = document,
            s = d.createElement("script");
        s.src = "https://diggimark.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
    },
    head() {
        let metas = this.post.yoast_meta.map((item) => {
            if (item.property == "og:url") {
                item.content = "https://diggimarknepal.com" + this.$route.path;
            }
            return item;
        });

        return {
            title: this.post.yoast_title,
            meta: metas,
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