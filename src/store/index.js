import Vue from "vue";
import Vuex from "vuex";
import config from "../config/config.json";
import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...config,
    index: 1,
    totalPages: 5,
    isLoading: true
  },
  mutations: {
    INCREMENT(state) {
      state.index++;
      state.disabled = true;
      localStorage.setItem("index", state.index);
    },
    CANGO(state) {
      state.disabled = false;
    },
    SET_INDEX(state, index) {
      state.index = index;
    },
    IS_LOADING(state, value) {
      state.isLoading = value;
    }
  },
  actions: {
    isLoading({ commit }, value) {
      commit("IS_LOADING", value);
    },
    canGo({ commit }) {
      commit("CANGO");
    },
    SET_INDEX({ commit }, index) {
      commit("SET_INDEX", index);
    },
    increment({ commit }) {
      commit("INCREMENT");
    }
  },
  getters: {
    disabled: state => state.disabled,
    isLoading: state => state.isLoading,
    isEnd: state => state.index != state.totalPages,
    getIndex: state => state.index
  }
});
