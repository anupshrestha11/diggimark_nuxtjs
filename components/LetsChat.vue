<template>
  <div class="">
    <nuxt-link
      to="/contact"
      class="btn w-100 p-4 lc text-center text-uppercase m-0"
    >
      <div
        class="text-white h6 font-weight-bold"
        style="letter-spacing: 0.2rem"
      >
        Action is foundational key to success
      </div>
      <div class="h1 text-white">
        <span>Let's Chat</span>
        <span class="arrow">
          <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
        </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lc {
  overflow: hidden;
  border-left: 10px solid var(--primaryColor);
  border-right: 10px solid var(--primaryColor);
  background-color: #2b2a2a;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--primaryColor);
  }
  .arrow {
    animation: 1s linear 1s infinite alternate slide;
  }
  .h1 {
    letter-spacing: 0.2rem;
    padding-top: 30px;
  }
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(5px);
  }
}
</style>
