import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dailyData: {
      word: {},
      language: {},
      photo: {},
    }
  },
  actions: {
    getDailyData({ dispatch }) {
      chrome.storage.sync.get("dailyData", (response) => {
        const data = response.dailyData;
        if (!!data && data.created_at == new Date().toDateString()) {
          dispatch('saveDailyData', data);
        } else dispatch('retrieveDailyData');
      });
    },
    retrieveDailyData({ dispatch }) {
      axios.get("http://localhost:3100")
        .then(response => {
          const { data } = response;
          data.created_at = new Date().toDateString();
          chrome.storage.sync.set({ dailyData: data });
          dispatch('saveDailyData', data);
        });
    },
    saveDailyData({ commit }, data) {
      commit('setDailyData', data);
    },
  },
  mutations: {
    setDailyData(state, data) {
      state.dailyData = data;
    }
  }
})