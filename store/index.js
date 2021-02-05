export const state = () => ({
  data: {
    name: "",
    description: "",
    head: {
      title: "",
      meta: []
    }
  },
  isNavActive: false,
  posts: [],
  post: "",
  testimonials: []
});

export const mutations = {
  SET_DATA(state, { name, description, head }) {
    state.data.name = name;
    state.data.description = description;
    state.data.head.title = head.title;
    state.data.head.meta = head.meta.map(item => {
      return {
        hid: item[Object.keys(item)[0]],
        name: item[Object.keys(item)[0]],
        content: item[Object.keys(item)[1]]
      };
    });
  },
  SET_NAVACTIVE(state) {
    state.isNavActive = !state.isNavActive;
  },
  disable_NavActive(state) {
    state.isNavActive = false;
  },
  set_posts(state, { posts }) {
    state.posts = posts;
  },
  set_single_post(state, { post }) {
    state.post = post;
    state.post.head = {
      title: post.yoast_title,
      meta: post.yoast_meta.map(item => {
        if (item[Object.keys(item)[0]] == "og:url") {
          item.content = "https://www.diggimarknepal.com/blog/" + post.slug;
        }
        return {
          hid: item[Object.keys(item)[0]],
          name: item[Object.keys(item)[0]],
          content: item[Object.keys(item)[1]]
        };
      })
    };
  },

  set_testimonials(state, { testimonials }) {
    state.testimonials = testimonials;
  }
};

export const actions = {
  async loadData({ commit }, { pageid }) {
    let response = await this.$axios.get("/");
    let name = response.data.name;
    let description = response.data.description;
    response = await this.$axios.get("/wp/v2/pages/" + pageid);
    let head = {
      title: response.data.yoast_title,
      meta: response.data.yoast_meta
    };
    commit("SET_DATA", { name, description, head });
  },
  changeNavActive({ commit }) {
    commit("SET_NAVACTIVE");
  },
  disableNavActive({ commit }) {
    commit("disable_NavActive");
  },

  async loadPosts({ commit }) {
    let response = await this.$axios.get("/wp/v2/posts");
    let posts = response.data;
    commit("set_posts", { posts });
  },
  async loadSinglePost({ commit }, { slug }) {
    let response = await this.$axios.get("/wp/v2/posts?slug=" + slug);
    let post = response.data[0];
    commit("set_single_post", { post });
  },

  async loadTestimonials({ commit }) {
    let response = await this.$axios.get("/wp/v2/testimonials");
    let testimonials = response.data;
    commit("set_testimonials", { testimonials });
  }
};
