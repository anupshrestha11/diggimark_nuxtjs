<template>
  <section fluid class="py-lg-5">
    <h2 class="text-center text-uppercase pt-5 pb-4">Our Team</h2>
    <VueSlickCarousel v-bind="slickOptions" class="team-grid">
      <div class=" mbr " v-for="(member, idx) in team" :key="idx">
        <img
          :src="member.better_featured_image.source_url"
          class="img-fluid mem-image"
        />
        <div class="title">
          <h5>{{ member.title.rendered }}</h5>
          <h6>{{ member.position }}</h6>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { mapState } from "vuex";
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 0,
        arrows: false,
        settings: "unslick",
        responsive: [
          {
            breakpoint: 99999,
            settings: "unslick"
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  mounted: () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".mbr", {
      scrollTrigger: {
        trigger: ".mbr",
        start: "top center"
      },
      duration: 2,
      opacity: 0,
      y: 30,
      stagger: 0.2
    });
    gsap.from(".mbr > .title", {
      scrollTrigger: {
        trigger: ".mbr",
        start: "top center"
      },
      duration: 1,
      opacity: 0,
      delay: 2,
      x: -100,
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

<style lang="scss" scoped>
.mem-image {
  // clip-path: circle();
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
}
.team-grid {
  padding: 20px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media all and (min-width: 1000px) {
    padding: 20px 50px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media all and (min-width: 1200px) {
    padding: 20px 50px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media all and (min-width: 1600px) {
    padding: 20px 50px;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  }
}

.mbr {
  width: 100%;
  height: 100%;

  position: relative;

  overflow: hidden;
  @media all and (max-width: 800px) {
    height: 400px;
  }
  .title {
    position: absolute;
    bottom: 6%;
    left: 0;
    color: var(--whiteColor);
    font-weight: bold;
    background: var(--primaryColor);
    padding: 8px 15px 8px 20px;
    height: 60px;
    h5 {
      font-size: 1rem;
    }
    h6 {
      font-size: 0.8rem;
    }

    @media all and (min-width: 1200px) {
      padding: 10px 20px 10px 30px;

      h5 {
        font-size: 1.25rem;
      }
      h6 {
        font-size: 1rem;
      }
      height: 80px;
    }
    &::after {
      content: "";
      position: absolute;
      right: -29px;
      top: 0;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 30px solid var(--primaryColor);
      @media all and (min-width: 1200px) {
        right: -39px;
        border-width: 40px;
      }
    }
  }
}
</style>
