<template>
  <b-card
    :title="title"
    :img-src="image"
    img-top
    class="overflow-hidden m-2"
    overlay
  >
    <div class="overlay">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="  filter: drop-shadow(0 -15px 0px var(--primaryColor99))"
      >
        <path
          fill="var(--primaryColor)"
          d="M0,96L48,80C96,64,192,32,288,16C384,0,480,0,576,10.7C672,21,768,43,864,58.7C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
    <template #footer>
      <em>{{ tags }}</em>
    </template>
  </b-card>
</template>

<script>
export default {
  props: ["title", "tags", "image"]
};
</script>

<style lang="scss" scoped>
.card {
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .card-body {
    position: absolute;
    top: unset;
    border-radius: unset;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    margin: 0;
    color: #fff;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease-in;
    .card-title {
      padding: 10px;
      z-index: 1;
      white-space: nowrap;
      transition: all 0.5s ease;
      padding: 10px;
      margin: 0;
      font-size: 1.3rem;
    }
    .btn {
      color: #fff;
      white-space: nowrap;
      padding: 10px;
      margin: 0;
      transition: all 0.5s ease;
    }
  }
  .overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(-1);
    z-index: -1;

    transition: opacity 0.5s ease;
  }
  &:hover {
    .card-body {
      .card-title {
        transform: translateX(0);
        opacity: 1;
      }
      .btn {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .overlay {
      opacity: 1;
    }
  }
  @media all and (min-width: 600px) {
    .card-body {
      .card-title {
        transform: translateY(100%);
        opacity: 0;
        padding: 20px;
        font-size: 1.5rem;
      }
      .btn {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    .overlay {
      opacity: 0;
    }
  }
}
</style>
