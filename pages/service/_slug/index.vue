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
        return {
            title: this.service.yoast_title,
            meta: this.service.yoast_meta,
        };
    },
};
</script>

<style>
</style>