export const state = () => ({
  data: {
    name: "",
    description: ""
  }
});

export const mutations = {
  SET_DATA(state, { name, description }) {
    state.data.name = name;
    state.data.description = description;
  }
};

export const actions = {
  async loadData({ commit }) {
    let response = await this.$axios.get("/");
    let name = response.data.name;
    let description = response.data.description;
    commit("SET_DATA", { name, description });
  }
};
