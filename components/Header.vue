<template>
  <b-navbar fixed="top" type="transparent" class="m-0 p-0">
    <header
      class="d-flex justify-content-between align-items-center w-100 p-2 px-lg-5 py-md-0"
      :class="[
        view.isScrolled ? 'main-header scrolled' : 'main-header scrolled-off'
      ]"
    >
      <b-navbar-brand
        style="z-index: 1"
        to="/"
        class="d-flex align-items-center"
        id="logo"
      >
        <Logo />
      </b-navbar-brand>
      <BurgerButton :isActive="isNavActive" :toggleActive="toggleActive" />
      <Nav :services="services" />
      <NavForMobile :isActive="isNavActive" :services="services" />
    </header>
  </b-navbar>
</template>

<script>
import gsap from "gsap";
import { mapState } from "vuex";
export default {
  data() {
    return {
      view: {
        isScrolled: false
      }
    };
  },
  async fetch() {
    await this.$store.dispatch("loadServices");
  },
  computed: {
    ...mapState(["isNavActive", "services"])
  },
  mounted: function() {
    gsap.from("#logo", { opacity: 0, duration: 1, x: -300 });
    gsap.from(".burger ", {
      opacity: 0,
      duration: 1,
      x: 300
    });
  },

  methods: {
    toggleActive() {
      this.$store.dispatch("changeNavActive");
      if (this.isNavActive == true) {
        gsap.from(".mobile-nav > * ", {
          opacity: 0,
          duration: 0.3,
          x: 300,
          stagger: 0.2
        });
      } else {
        gsap.to(".mobile-nav > * ", {
          opacity: 1,
          duration: 0,
          x: 0
        });
      }
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset < 100) {
        // user is scrolled
        if (this.view.isScrolled) this.view.isScrolled = false;
      } else {
        // user is at top of page
        if (!this.view.isScrolled) this.view.isScrolled = true;
      }
    }
  },
  watch: {
    $route() {
      this.$store.dispatch("disableNavActive");
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
header {
  transition: all 0.3s ease;
  &.scrolled {
    background: #fff;
    animation: show 0.4s ease-in;
    box-shadow: 0px 4px 10px 0 #00000045;
  }
}

@keyframes show {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
