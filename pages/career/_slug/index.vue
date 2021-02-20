<template>
  <section class="bg-white">
    <SmallHero
      :title="career.title.rendered"
      :image="career.better_featured_image.source_url"
    />
    <b-container>
      <div class="py-4">
        <div class="py-1">
          <strong>Position : </strong><span>{{ career.position }}</span>
        </div>
        <div class="py-1">
          <strong>No. of seats : </strong><span>{{ career.no_of_seats }}</span>
        </div>
        <div class="py-1">
          <strong>Experience : </strong><span>{{ career.experience }}</span>
        </div>
        <div class="py-1">
          <strong>Requirements : </strong><span>{{ career.requirements }}</span>
        </div>
      </div>
      <div v-html="career.content.rendered" class="text-justify"></div>
      <div class="py-4 text-right">
        <b-button variant="success" :href="career.google_form" target="_blank"
          >Apply Now</b-button
        >
      </div>
    </b-container>

    <LetsChat />
  </section>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      let res = await context.$axios.get(
        "/wp/v2/careers?slug=" + context.params.slug
      );
      let career = res.data[0];
      if (!career) {
        throw {
          statusCode: 404,
          message: "THIS PAGE COULD NOT BE FOUND"
        };
      }
      return {
        career
      };
    } catch (e) {
      context.error(e);
    }
  },
  head() {
    let metas = this.career.yoast_meta.map(item => {
      if (item.property == "og:url") {
        item.content = "https://diggimarknepal.com" + this.$route.path;
      }
      return item;
    });

    return {
      title: this.career.yoast_title,
      meta: metas
    };
  }
};
</script>

<style></style>
