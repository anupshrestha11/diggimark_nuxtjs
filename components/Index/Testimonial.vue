<template>
  <b-container>
    <h2 class="pt-5 pb-4 mt-5 text-center text-uppercase">
      What our Client Say?
    </h2>
    <client-only>
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="(testimonial, idx) in testimonials" :key="idx">
          <TestimonialCard :testimonial="testimonial" />
        </div>
      </VueSlickCarousel>
    </client-only>
  </b-container>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapState } from "vuex";

export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  updated: () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".custom__card", {
      scrollTrigger: ".custom__card",
      duration: 1,
      opacity: 0,
      x: 100,
      stagger: 0.2
    });
  },
  computed: {
    ...mapState(["testimonials"])
  }
};
</script>

<style></style>
