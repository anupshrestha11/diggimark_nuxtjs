<template>
  <b-container class="py-5">
    <h2 class="text-center text-uppercase pt-5 pb-4">Our Team</h2>
    <b-row>
      <b-col
        cols="12"
        md="4"
        class="text-center p-2 mbr mb-3"
        v-for="(member, idx) in team.reverse()"
        :key="idx"
      >
        <img
          :src="member.better_featured_image.source_url"
          class="img-fluid"
          style="
                        clip-path: circle();
                        object-fit: cover;
                        width: 100%;
                        height: 300px;
                        overflow: hidden;
                    "
        />
        <div class="text-center mt-2">
          <h5>{{ member.title.rendered }}</h5>
          <em>{{ member.position }}</em>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapState } from "vuex";
export default {
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".mbr", {
      scrollTrigger: ".mbr",
      duration: 2,
      opacity: 0,
      y: 100,
      stagger: 0.2
    });
  },
  async fetch() {
    await this.$store.dispatch("loadTeam");
  },
  computed: {
    ...mapState(["team"])
  }
};
</script>

<style lang="scss" scoped></style>
