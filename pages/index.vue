<template>
  <div>
    <section>
      <Hero :title="data.name" :description="data.description" />
    </section>
    <section>
      <Section />
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async fetch({ store }) {
    await store.dispatch("loadData", { pageid: 9 });
    await store.dispatch("loadTestimonials");
    await store.dispatch("loadProjects");
    await store.dispatch("loadClients");
  },
  computed: {
    ...mapState(["data", "testimonials"])
  },

  head() {
    let metas = this.data.head.meta.map(item => {
      item.hid = item.name || item.property;
      if (item.property == "og:url") {
        item.content = "https://diggimarknepal.com" + this.$route.path;
      }
      return item;
    });

    return {
      title: this.data.head.title,
      meta: metas
    };
  }
};
</script>

<style></style>
