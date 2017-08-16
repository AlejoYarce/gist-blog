import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    postList: [],
    gist: {},
  },
  actions: {
    GET_POSTS: ({ commit }, posts) => {
      commit('GET_POSTS_MUTATION', posts);
    },
    GET_POST_DETAILS: ({ commit }, gist) => {
      commit('GET_POST_DETAILS_MUTATION', gist);
    },
  },
  mutations: {
    GET_POSTS_MUTATION: (state, posts) => {
      const actualState = state;
      actualState.postList = posts;
    },
    GET_POST_DETAILS_MUTATION: (state, gist) => {
      const actualState = state;
      actualState.gist = gist;
    },
  },
  getters: {
    postList: (state) => {
      const list = state.postList;
      return list;
    },
    gist: (state) => {
      const gist = state.gist;
      return gist;
    },
  },
});

export default store;
