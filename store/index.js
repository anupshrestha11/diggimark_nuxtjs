export const state = () => ({
  data: {
    name: "",
    description: ""
  },
  isNavActive: false
});

export const mutations = {
  SET_DATA(state, { name, description }) {
    state.data.name = name;
    state.data.description = description;
  },
  SET_NAVACTIVE(state) {
    state.isNavActive = !state.isNavActive;
  },
  disable_NavActive(state) {
    state.isNavActive = false;
  }
};

export const actions = {
  async loadData({ commit }) {
    let response = await this.$axios.get("/");
    let name = response.data.name;
    let description = response.data.description;
    commit("SET_DATA", { name, description });
  },
  changeNavActive({ commit }) {
    commit("SET_NAVACTIVE");
  },
  disableNavActive({ commit }) {
    commit("disable_NavActive");
  }
};
