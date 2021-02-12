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
            </div>
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
export default {
    async asyncData(context) {
        try {
            let response = await context.$axios.get(
                "/wp/v2/services?slug=" + context.params.slug
            );
            let service = response.data[0];
            if (!service) {
                throw {
                    statusCode: 404,
                    message: "THIS PAGE COULD NOT BE FOUND",
                };
            }
            return { service };
        } catch (e) {
            context.error(e);
        }
    },
    head() {
        let metas = this.service.yoast_meta.map((item) => {
            if (item.property == "og:url") {
                item.content = "https://diggimarknepal.com" + this.$route.path;
            }
            return item;
        });

        return {
            title: this.service.yoast_title,
            meta: metas,
        };
    },
};
</script>

<style>
</style>