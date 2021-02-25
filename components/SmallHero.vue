<template>
  <div
    class="hero"
    :style="
      `background: linear-gradient(0deg, #00000050, #00000050),url('` +
        image +
        `') no-repeat 50% 30%; background-position: 50% 42%; background-size: cover; height:` +
        height
    "
    :data-image="image"
  >
    <div class="title text-center">
      <h1 class="display-1" v-html="title"></h1>
    </div>
    <div id="particle-wave"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    image: { type: String, default: "/bg1.jpg" },
    height: {}
  },

  data() {
    return {
      animationId: ""
    };
  },

  mounted() {
    if (document.querySelector("canvas")) {
      document.querySelector("canvas").remove();
    }
    // this.animationId = this.threejs();
  },
  beforeDestroy() {
    // this.stopAnimation(this.animationId);
  },

  methods: {
    stopAnimation(id) {
      var cancelAnimationFrame =
        window.cancelAnimationFrame || window.mozCancelAnimationFrame;
      let check = cancelAnimationFrame(this.threejs());
      console.log("stoped  " + id + " " + check);
    },
    threejs() {
      let SEPARATION = 40,
        AMOUNTX = 70,
        AMOUNTY = 20;

      let container;
      let camera,
        scene,
        renderer = null;

      container = document.querySelector("#particle-wave");
      let hero = document.querySelector(".hero");

      let particles,
        particle,
        count = 0;

      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = hero.offsetHeight / 2;

      init();
      animate();

      function init() {
        if (container) {
          container.className += container.className ? " waves" : "waves";
        }

        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / hero.offsetHeight,
          1,
          10000
        );
        camera.position.y = 150;
        camera.position.z = 300;
        camera.rotation.x = 0.1;

        scene = new THREE.Scene();

        particles = new Array();

        let PI2 = Math.PI * 2;
        let material = new THREE.SpriteCanvasMaterial({
          color: 0xffffff,
          program: function(context) {
            context.beginPath();
            context.arc(0, 0, 0.3, 0, PI2, true);
            context.fill();
          }
        });

        let i = 0;

        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++] = new THREE.Sprite(material);
            particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
            particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION - 10);
            scene.add(particle);
          }
        }

        renderer = new THREE.CanvasRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, hero.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        window.addEventListener("resize", onWindowResize, false);
      }

      function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = hero.offsetHeight / 2;

        camera.aspect = window.innerWidth / hero.offsetHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, hero.offsetHeight);
      }
      let animationId;
      function animate() {
        animationId = requestAnimationFrame(animate);
        render();
      }

      function render() {
        let i = 0;

        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++];
            particle.position.y =
              Math.sin((ix + count) * 0.5) * 20 +
              Math.sin((iy + count) * 0.5) * 20;
            particle.scale.x = particle.scale.y =
              (Math.sin((ix + count) * 0.3) + 2) * 4 +
              (Math.sin((iy + count) * 0.5) + 1) * 4;
          }
        }

        renderer.render(scene, camera);

        // This increases or decreases speed
        count += 0.05;
      }
      return animationId;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.hero {
  height: 250px;
  position: relative;

  @media all and (min-width: 600px) {
    height: 500px;
  }
  .title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    h1 {
      width: 100vw;
      font-weight: bolder;
      color: #fff;
      text-transform: uppercase;
      text-shadow: 0 0 10px #000000;
      letter-spacing: 0.1rem;
      @media all and (max-width: 1000px) {
        font-size: 2.3rem !important;
      }
      @media all and (max-width: 1200px) {
        font-size: 3.5rem;
      }
    }
  }
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
