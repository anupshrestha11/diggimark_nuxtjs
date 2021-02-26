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
  testimonials: [],
  services: [],
  service: {},
  team: [],
  projects: [],
  project: {},
  clients: []
});

export const mutations = {
  SET_DATA(state, { name, description, head }) {
    state.data.name = name;
    state.data.description = description;
    state.data.head.title = head.title;
    state.data.head.meta = head.meta;
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
      meta: post.yoast_meta
    };
  },
  set_testimonials(state, { testimonials }) {
    state.testimonials = testimonials;
  },
  set_services(state, { services }) {
    state.services = services;
  },
  set_single_service(state, { service }) {
    state.service = service;
  },
  set_team(state, { team }) {
    state.team = team;
  },
  set_projects(state, { projects }) {
    state.projects = projects;
  },
  set_project(state, { project }) {
    state.project = project;
  },
  set_clients(state, { clients }) {
    state.clients = clients;
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
  },

  async loadServices({ commit }) {
    let response = await this.$axios.get("/wp/v2/services");
    let services = response.data;
    commit("set_services", { services });
  },
  async loadSingleService({ commit }, { slug }) {
    let response = await this.$axios.get("/wp/v2/services?slug=" + slug);
    let service = response.data[0];
    commit("set_single_service", { service });
  },
  async loadTeam({ commit }) {
    let response = await this.$axios.get("/wp/v2/team");
    let team = response.data;

    team = team.reverse();

    commit("set_team", { team });
  },
  async loadProjects({ commit }) {
    let response = await this.$axios.get("/wp/v2/projects");
    let projects = response.data;
    commit("set_projects", { projects });
  },
  async loadSingleProject({ commit }, { slug }) {
    let response = await this.$axios.get("/wp/v2/projects?slug=" + slug);
    let project = response.data[0];
    commit("set_project", { project });
  },
  async loadClients({ commit }) {
    let response = await this.$axios.get("/wp/v2/clients");
    let clients = response.data;
    commit("set_clients", { clients });
  }
};
