<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="loader"></div>
      <h1 class="text-uppercase text-center">Diggimark Nepal</h1>
    </div>
    <Header />

    <div class="main" style="z-index: 1">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return { loading: true, style: "" };
  },
  mounted() {
    this.stopLoading();
  },
  methods: {
    stopLoading() {
      if (this.loading) {
        this.loading = false;
      }
    }
  },
  head() {}
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  scroll-behavior: smooth;
}
body {
  font-family: "Nunito Sans", sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

:root {
  --primaryColor: #0073ba;
  --primaryColor99: #0073ba99;
  --secondaryColor: #00a79d;
  --secondaryColor99: #00a79d99;
  --whiteColor: #ffffff;
  --darkColor: #090909;
}

.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    font-weight: 4rem;
  }
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.main {
  @media all and (min-width: 600px) {
    margin-bottom: 600px;
  }
  @media all and (min-width: 1000px) {
    margin-bottom: 400px;
  }
}
</style>
