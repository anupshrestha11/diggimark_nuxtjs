<template>
  <b-container fluid class="bg-white text-center">
    <h2 class="text-center pt-5 pb-4 text-uppercase title">Our Clients</h2>
    <b-container>
      <p style="max-width: 700px; font-size: 1.1rem" class="mx-auto pb-4">
        Our Diggimark Nepal Company Has Elevated Some Of The Largest Brands On
        The Planet, But We're Passionate About Growing Brands Of All Sizes.
      </p>
    </b-container>
    <b-container class="d-flex flex-wrap justify-content-around">
      <div
        class="client-logo d-flex"
        style="opacity: 0"
        v-for="client in clients"
        :key="client.id"
      >
        <img
          :src="client.better_featured_image.source_url"
          :alt="client.title.rendered"
          width="200"
          height="150"
          class="brand-image m-2 mt-auto mb-auto"
          style="object-fit: contain"
          loading="lazy"
        />
      </div>
    </b-container>
  </b-container>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      offset: 0
    };
  },
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".client-logo", {
      scrollTrigger: {
        trigger: ".client-logo",
        start: "top center"
      },
      opacity: 1,
      duration: 4,
      stagger: 0.2
    });
  },
  computed: {
    ...mapState(["clients"])
  }
};
</script>

<style lang="scss" scoped>
.brand-image {
  transition: filter 0.3s ease-in;
  width: 100px;
  @media all and (min-width: 600px) {
    width: 150px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw);
}
</style>
