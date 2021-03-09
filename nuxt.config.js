require("dotenv").config();

const axios = require("axios");
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  // target: "static",

  // server: {
  //   host: "0.0.0.0",
  //   port: 3000
  // },
  loading: "~/components/Loading.vue",

  head: {
    title: process.env.app_name || "Diggimark Nepal",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.app_description || "Nepal best It Solution"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        hid: "threejs",
        src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js",
        defer: true
      }
    ]
  },

  generate: {
    fallback: "404.html"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/main.scss",
    "vue-slick-carousel/dist/vue-slick-carousel.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "./plugins/vue-slick-carousel.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    "@nuxtjs/dotenv",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    hostname: "https://diggimarknepal.com",
    routes: async () => {
      let all = [];
      let response1 = await axios.get(
        "https://api.diggimarknepal.com/wp-json/wp/v2/posts"
      );
      let response2 = await axios.get(
        "https://api.diggimarknepal.com/wp-json/wp/v2/services"
      );
      let response3 = await axios.get(
        "https://api.diggimarknepal.com/wp-json/wp/v2/careers"
      );
      all = [
        ...response1.data.map(post => "/blog/" + post.slug),
        ...response2.data.map(post => "/service/" + post.slug),
        ...response3.data.map(post => "/career/" + post.slug)
      ];
      return all;
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.app_baseurl || "https://api.diggimarknepal.com/wp-json"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    },
    icon: {
      source: "./static/icon.png",
      fileName: "icon.png"
    }
  },

  bootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap", "gsap/draggable", "gsap/scrolltrigger", "rellax"]
  }
};
