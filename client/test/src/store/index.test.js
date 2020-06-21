import store from '../../../src/store/index';
import { actions, mutations } from '../../../src/store/index';

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
      beforeEach( () => {
        data = {
          dailyData: [],
          created_at: new Date().toDateString()
        };
      });
      it('calls dispatch save daily data', () => {
        jest
        .spyOn(chrome.storage.sync, 'get')
        .mockImplementation((language, callback) => {
          return callback(data);
        });
        jest
        .spyOn(global, 'Date')
        .mockImplementationOnce(() => new Date('2019-05-14T11:01:58.135Z'));
        // global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z').getTime())
        actions.getDailyData({commit, dispatch});
        expect(dispatch).toHaveBeenCalledWith('saveDailyData', data);
      });
    });
  });
  // describe('mutations', () => {
  //   it('sets the daily data', () => {
  //     const state = {
  //       dailyData: {}
  //     };
  //     const data = {
  //       items: []
  //     };
  //     console.log(store.mutations);
  //     store._mutations.setDailyData();
  //     expect(state.dailyData).toEqual(data);
  //   });
  // });
});
