/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const currentLanguagesCount = 14;

export const state = {
  dailyData: {
    word: {},
    language: {},
    quote: {},
    photo: { user: {} },
  },
  hasError: false,
  languageOptions: [],
  selectedLanguages: [],
  selectedLanguagesWithFlags: [],
  loading: false,
};

export const actions = {
  getSelectedLanguages({ commit, dispatch }) {
    commit('setLoading', true);
    chrome.storage.sync.get('selectedLanguages', response => {
      let { selectedLanguages } = response;
      if (selectedLanguages === undefined || selectedLanguages.length === 0) {
        selectedLanguages = ['german'];
      }
      dispatch('saveSelectedLanguages', selectedLanguages);
      dispatch('getDailyData');
    });
  },
  getSelectedLanguagesWithFlags({ commit, dispatch }) {
    commit('setLoading', true);
    axios
      .get(`${process.env.VUE_APP_API_URL}/languages`)
      .then(result => {
        chrome.storage.sync.get('selectedLanguages', response => {
          const { selectedLanguages } = response;
          let selectedLanguagesWithFlags = [];
          if (selectedLanguages === undefined || selectedLanguages.length === 0) {
            selectedLanguagesWithFlags = [
              {
                language: 'german',
                flag: 'twa-germany-flag',
              },
            ];
          } else {
            selectedLanguagesWithFlags = selectedLanguages.map(o => {
              return {
                language: o,
                flag: result.data.languages[o].flag,
              };
            });
          }
          dispatch('saveSelectedLanguagesWithFlags', selectedLanguagesWithFlags);
          dispatch('getDailyData');
        });
      })
      .catch(() => commit('setHasError', true));
  },
  saveSelectedLanguages({ commit }, selectedLanguages) {
    chrome.storage.sync.set({ selectedLanguages });
    commit('setSelectedLanguages', selectedLanguages);
  },
  saveSelectedLanguagesWithFlags({ commit }, selectedLanguagesWithFlags) {
    chrome.storage.sync.set({ selectedLanguagesWithFlags });
    commit('setSelectedLanguagesWithFlags', selectedLanguagesWithFlags);
  },
  resetSelectedLanguages({ dispatch }, selectedLanguages) {
    dispatch('saveSelectedLanguages', selectedLanguages);
    dispatch('retrieveDailyData');
  },
  getDailyData({ commit, dispatch }) {
    chrome.storage.sync.get('dailyData', response => {
      const data = response.dailyData;
      if (!!data && data.created_at === new Date().toDateString()) {
        dispatch('saveDailyData', data);
        commit('setLoading', false);
      } else dispatch('retrieveDailyData');
    });
  },
  retrieveDailyData({ commit, dispatch }) {
    commit('setLoading', true);
    const languages = state.selectedLanguages.join(',');
    axios
      .get(`${process.env.VUE_APP_API_URL}/daily?languages=${languages}`)
      .then(response => {
        const { data } = response;
        data.created_at = new Date().toDateString();
        chrome.storage.sync.set({ dailyData: data });
        dispatch('saveDailyData', data);
        dispatch('getSelectedLanguagesWithFlags');
        commit('setLoading', false);
      })
      .catch(() => {
        commit('setHasError', true);
      });
  },
  saveDailyData({ commit }, data) {
    commit('setDailyData', data);
  },
  getLanguageOptions({ dispatch }) {
    chrome.storage.sync.get('languageOptions', response => {
      const data = response.languageOptions;
      if (!!data && data.length === currentLanguagesCount)
        dispatch('saveLanguageOptions', data);
      else dispatch('retrieveLanguageOptions');
    });
  },
  retrieveLanguageOptions({ commit, dispatch }) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/languages`)
      .then(response => {
        const options = Object.keys(response.data.languages);
        chrome.storage.sync.set({ languageOptions: options });
        dispatch('saveLanguageOptions', options);
      })
      .catch(() => commit('setHasError', true));
  },
  saveLanguageOptions({ commit }, options) {
    commit('setLanguageOptions', options);
  },
};

export const mutations = {
  setDailyData(state, data) {
    state.dailyData = data;
  },
  setLanguageOptions(state, languageOptions) {
    state.languageOptions = languageOptions;
  },
  setSelectedLanguages(state, selectedLanguages) {
    state.selectedLanguages = selectedLanguages;
  },
  setSelectedLanguagesWithFlags(state, selectedLanguagesWithFlags) {
    state.selectedLanguagesWithFlags = selectedLanguagesWithFlags;
  },
  setHasError(state, hasError) {
    state.hasError = hasError;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
