<template>
  <div class="py-5">
    <h3 class="text-center text-uppercase pt-5 pb-4 mt-5 ltw" id="latest-work">
      Work For Our Clients
    </h3>
    <b-container fluid>
      <b-row class="grid">
        <b-col
          md="6"
          lg="4"
          xl="3"
          class="m-0 p-0 work__card filter-item"
          v-for="(work, idx) in projects"
          :key="idx"
        >
          <WorkCard
            :title="work.title.rendered"
            :tags="work.tags"
            :image="[
              work.better_featured_image !== null
                ? work.better_featured_image.source_url
                : `/bg1.jpg`
            ]"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["projects"])
  },

  mounted: () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".work__card", {
      scrollTrigger: {
        trigger: ".work__card",
        start: "top center"
      },
      opacity: 0,
      duration: 1,
      y: 100,
      stagger: 0.3
    });
  }
};
</script>

<style></style>
