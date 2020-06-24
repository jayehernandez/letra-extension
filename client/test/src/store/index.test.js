import store, { state } from '../../../src/store/index';
import { actions, mutations } from '../../../src/store/index';
import axios from 'axios';
jest.mock('axios');

const get = jest.fn();
const set = jest.fn();
global.chrome = {
  storage: {
    sync: {
      set,
      get,
    },
  },
};

describe('store', () => {
  it('initialzes the store', () => {
    expect(store).toBeTruthy();
  });

  describe('initial state', () => {
    it('has the initial values for dailyData', () => {
      expect(store.state.dailyData.word).toEqual({});
      expect(store.state.dailyData.language).toEqual({});
      expect(store.state.dailyData.quote).toEqual({});
      expect(store.state.dailyData.photo).toEqual({ user: {} });
    });
    it('has the initial value for hasError', () => {
      expect(store.state.hasError).toBe(false);
    });
    it('has the initial value for languageOptions', () => {
      expect(store.state.languageOptions).toEqual([]);
    });
    it('has the initial value for selectedLanguages', () => {
      expect(store.state.selectedLanguages).toEqual([]);
    });
    it('has the initial value for loading', () => {
      expect(store.state.loading).toBe(false);
    });
  });

  describe('actions', () => {
    let commit, dispatch;
    beforeEach(() => {
      jest.clearAllMocks();
      commit = jest.fn();
      dispatch = jest.fn();
    });
    describe('getSelectedLanguages', () => {
      it('calls commit let loading', () => {
        actions.getSelectedLanguages({ commit, dispatch });
        expect(commit).toHaveBeenCalledWith('setLoading', true);
      });
      it('defaults to germen if selected language is undefined', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback({
              selectedLanguages: undefined,
            });
          });
        actions.getSelectedLanguages({ commit, dispatch });
        expect(dispatch).toHaveBeenCalledWith('saveSelectedLanguages', [
          'german',
        ]);
      });
      it('defaults to germen if selected language is empty array', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback({
              selectedLanguages: [],
            });
          });
        actions.getSelectedLanguages({ commit, dispatch });
        expect(dispatch).toHaveBeenCalledWith('saveSelectedLanguages', [
          'german',
        ]);
      });
      it('calls dispatch save selected languages', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback({
              selectedLanguages: ['japanese'],
            });
          });
        actions.getSelectedLanguages({ commit, dispatch });
        expect(dispatch).toHaveBeenCalledWith('saveSelectedLanguages', [
          'japanese',
        ]);
      });
      it('calls dispatch get daily data', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback({
              selectedLanguages: ['japanese'],
            });
          });
        actions.getSelectedLanguages({ commit, dispatch });
        expect(dispatch).toHaveBeenCalledWith('getDailyData');
      });
    });

    describe('saveSelectedLanguages', () => {
      it('sets the selected langugage in chrome local storage', () => {
        actions.saveSelectedLanguages({ commit }, ['japanese, korean']);
        expect(set).toHaveBeenCalledWith({
          selectedLanguages: ['japanese, korean'],
        });
      });
      it('calls commit set selected language', () => {
        actions.saveSelectedLanguages({ commit }, ['japanese, korean']);
        expect(commit).toHaveBeenCalledWith('setSelectedLanguages', [
          'japanese, korean',
        ]);
      });
    });

    describe('resetSelectedLanguages', () => {
      it('calls dispatch save selected language', () => {
        actions.resetSelectedLanguages({ dispatch }, ['japanese, korean']);
        expect(dispatch).toHaveBeenCalledWith('saveSelectedLanguages', [
          'japanese, korean',
        ]);
      });
      it('calls dispatch retrieve daily data', () => {
        actions.resetSelectedLanguages({ dispatch }, ['japanese, korean']);
        expect(dispatch).toHaveBeenCalledWith('retrieveDailyData');
      });
    });
    describe('getDailyData', () => {
      let data;
      const mockDate = new Date(1466424490000);
      beforeEach(() => {
        data = {
          dailyData: {
            created_at: mockDate.toDateString(),
          },
        };
      });
      it('calls dispatch save daily data', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback(data);
          });
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
        actions.getDailyData({ commit, dispatch });
        expect(dispatch).toHaveBeenCalledWith('saveDailyData', data.dailyData);
      });
      it('calls commit set loading false', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback(data);
          });
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
        actions.getDailyData({ commit, dispatch });
        expect(commit).toHaveBeenCalledWith('setLoading', false);
      });
      it('calls dispatch retrieve daily data if created at date does not match new date to date string', () => {
        data.created_at = new Date();
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback({
              dailyData: {
                created_at: new Date(),
              },
            });
          });
        actions.getDailyData({ commit, dispatch });
        expect(dispatch).toHaveBeenCalledWith('retrieveDailyData');
      });
    });
    describe('retrieveDailyData', () => {
      let data;
      beforeEach(() => {
        process.env.VUE_APP_API_URL = 'app-api-url';
        state.selectedLanguages = ['japanese', 'korean'];
        data = {
          created_at: new Date(),
          dailyData: [],
        };
      });
      it('calls the get endpoint for the selected languages', () => {
        axios.get.mockResolvedValue({ data });
        actions.retrieveDailyData({ commit, dispatch });
        expect(axios.get).toHaveBeenCalledWith(
          'app-api-url/daily?languages=japanese,korean',
        );
      });
      it('calls chrome storage set', done => {
        axios.get.mockResolvedValue({ data });
        actions.retrieveDailyData({ commit, dispatch });
        axios
          .get('app-api-url/daily?languages=japanese,korean')
          .then(response => {
            expect(set).toHaveBeenCalledWith({ dailyData: data });
            done();
          });
      });
      it('calls dispatch save daily data', done => {
        axios.get.mockResolvedValue({ data });
        actions.retrieveDailyData({ commit, dispatch });
        axios
          .get('app-api-url/daily?languages=japanese,korean')
          .then(response => {
            expect(dispatch).toHaveBeenCalledWith('saveDailyData', data);
            done();
          });
      });
      it('calls commit set loading', done => {
        axios.get.mockResolvedValue({ data });
        actions.retrieveDailyData({ commit, dispatch });
        axios
          .get('app-api-url/daily?languages=japanese,korean')
          .then(response => {
            expect(commit).toHaveBeenCalledWith('setLoading', false);
            done();
          });
      });
      it('calls set has error if the call fails', done => {
        axios.get.mockRejectedValue(new Error('Something bad happened!'));
        actions.retrieveDailyData({ commit, dispatch });
        axios
          .get('app-api-url/daily?languages=japanese,korean')
          .then(response => {
            // empty then with catch tagged on to test the code inside the catch block
          })
          .catch(error => {
            expect(commit).toHaveBeenCalledWith('setHasError', true);
            done();
          });
      });
    });
    describe('saveDailyData', () => {
      let data;
      beforeEach(() => {
        data = {
          created_at: new Date(),
          dailyData: [],
        };
      });
      it('commits set daily data', () => {
        actions.saveDailyData({ commit }, data);
        expect(commit).toHaveBeenCalledWith('setDailyData', data);
      });
    });
    describe('getLanguageOptions', () => {
      let languageOptions;
      beforeEach(() => {
        languageOptions = [
          'japanese',
          'japanese',
          'japanese',
          'japanese',
          'japanese',
          'japanese',
          'japanese',
          'japanese',
          'japanese',
          'japanese',
          'japanese',
        ];
      });
      it('calls dispatch save language options', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback({
              languageOptions,
            });
          });
        actions.getLanguageOptions({ dispatch });
        expect(dispatch).toHaveBeenCalledWith(
          'saveLanguageOptions',
          languageOptions,
        );
      });
      it('calls dispatch retrieve language options', () => {
        jest
          .spyOn(chrome.storage.sync, 'get')
          .mockImplementation((language, callback) => {
            return callback({
              languageOptions: [],
            });
          });
        actions.getLanguageOptions({ dispatch });
        expect(dispatch).toHaveBeenCalledWith('retrieveLanguageOptions');
      });
    });
    describe('retrieveLanguageOptions', () => {
      let data;
      beforeEach(() => {
        process.env.VUE_APP_API_URL = 'app-api-url';
        data = {
          languages: [],
        };
      });
      it('calls the get endpoint for the language options', () => {
        axios.get.mockResolvedValue({ data });
        actions.retrieveLanguageOptions({ commit, dispatch });
        expect(axios.get).toHaveBeenCalledWith('app-api-url/languages');
      });
      it('calls chrome storage set', done => {
        axios.get.mockResolvedValue({ data });
        actions.retrieveLanguageOptions({ commit, dispatch });
        axios.get('app-api-url/languages').then(response => {
          expect(set).toHaveBeenCalledWith({ languageOptions: [] });
          done();
        });
      });
      it('calls dispatch save language options', done => {
        axios.get.mockResolvedValue({ data });
        actions.retrieveLanguageOptions({ commit, dispatch });
        axios.get('app-api-url/languages').then(response => {
          expect(dispatch).toHaveBeenCalledWith('saveLanguageOptions', []);
          done();
        });
      });
      it('calls set has error if the call fails', done => {
        axios.get.mockRejectedValue(new Error('Something bad happened!'));
        actions.retrieveLanguageOptions({ commit, dispatch });
        axios
          .get('app-api-url/languages')
          .then(response => {
            // empty then with catch tagged on to test the code inside the catch block
          })
          .catch(error => {
            expect(commit).toHaveBeenCalledWith('setHasError', true);
            done();
          });
      });
    });
    describe('saveLanguageOptions', () => {
      it('calls commit set language options', () => {
        actions.saveLanguageOptions({ commit }, []);
        expect(commit).toHaveBeenCalledWith('setLanguageOptions', []);
      });
    });
  });
  describe('mutations', () => {
    it('sets the daily data', () => {
      const state = {
        dailyData: {},
      };
      const data = {
        items: [],
      };
      mutations.setDailyData(state, data);
      expect(state.dailyData).toEqual(data);
    });
    it('sets the language options', () => {
      const state = {
        dailyData: {},
      };
      let languageOptions = ['korean'];
      mutations.setLanguageOptions(state, languageOptions);
      expect(state.languageOptions).toEqual(languageOptions);
    });
    it('sets the selected languages', () => {
      const state = {
        dailyData: {},
      };
      let selectedLanguages = ['korean'];
      mutations.setSelectedLanguages(state, selectedLanguages);
      expect(state.selectedLanguages).toEqual(selectedLanguages);
    });

    it('sets has error', () => {
      const state = {
        dailyData: {},
      };
      let hasError = true;
      mutations.setHasError(state, hasError);
      expect(state.hasError).toEqual(hasError);
    });

    it('sets loading', () => {
      const state = {
        dailyData: {},
      };
      let loading = true;
      mutations.setLoading(state, loading);
      expect(state.loading).toEqual(loading);
    });
  });
});
