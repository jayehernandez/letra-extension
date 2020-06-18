import store from '../../../src/store/index';

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
    it('gets the selected language', () => {
      //
    });
  });
  describe('mutations', () => {
    it('sets the daily data', () => {
      const state = {
        dailyData: {}
      };
      const data = {
        items: []
      };
      console.log(store.mutations);
      store._mutations.setDailyData();
      expect(state.dailyData).toEqual(data);
    });
  });
});
