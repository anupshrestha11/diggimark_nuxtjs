<template>
    <section class="bg-white w-100">
        <SmallHero
            :title="about.title.rendered"
            :image="about.better_featured_image.source_url"
        />
        <b-container class="px-lg-5 py-lg-5">
            <div class="" v-html="about.content.rendered"></div>
            <OurTeam />
        </b-container>
        <LetsChat />
    </section>
</template>

<script>
export default {
    async asyncData(context) {
        let res = await context.$axios.get("/wp/v2/pages/89");
        let about = res.data;
        return {
            about,
        };
    },
    head() {
        return {
            title: this.about.yoast_title,
            meta: this.about.yoast_meta,
        };
    },
};
</script>
