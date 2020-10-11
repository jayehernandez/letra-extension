import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Word from '../../../src/views/Word';
import TranslateButton from '../../../src/components/TranslateButton';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.directive('wow', { bind() {}, unbind() {} });

describe('Word', () => {
  const store = new Vuex.Store({
    state: {
      dailyData: {
        word: {
          romanization: '',
          translation: '',
          word: '',
        },
        quote: {
          sentence: 'sentence',
          author: 'author',
        },
      },
      loading: false,
    },
  });
  let wrapper = shallowMount(Word, { store, localVue });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  describe('when loading is false', () => {
    it('renders daily word', () => {
      const wordWrapper = wrapper.find(
        '.fadeIn.center-container .daily-word-container',
      );

      expect(wordWrapper.exists()).toBeTruthy();
    });

    it('displays romanization correctly', () => {
      const romanizationSelector = '.daily-word-container h3';

      expect(wrapper.find(romanizationSelector).exists()).toBeTruthy();
      expect(wrapper.find(romanizationSelector).text()).toBe('');

      store.state.dailyData.word.romanization = 'romanization';
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.find(romanizationSelector).text()).toBe(
        wrapper.vm.dailyData.word.romanization,
      );
    });

    it('displays daily word correctly', () => {
      const wordSelector = '.daily-word-container h1';

      expect(wrapper.find(wordSelector).exists()).toBeTruthy();
      expect(wrapper.find(wordSelector).text()).toBe('');

      store.state.dailyData.word.word = 'word';
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.find(wordSelector).text()).toBe(
        wrapper.vm.dailyData.word.word,
      );
    });

    it('displays translation correctly', () => {
      const translationSelector = '.daily-word-container h2';

      expect(wrapper.find(translationSelector).exists()).toBeTruthy();
      expect(wrapper.find(translationSelector).text()).toBe('');

      store.state.dailyData.word.translation = 'translation';
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.find(translationSelector).text()).toBe(
        wrapper.vm.dailyData.word.translation,
      );
    });

    it('renders quote and author', () => {
      const quoteWrapper = wrapper.find('.quote-container');

      expect(quoteWrapper.exists()).toBeTruthy();
      expect(quoteWrapper.find('.sentence').exists()).toBeTruthy();
      expect(quoteWrapper.find('.sentence').text()).toBe(
        wrapper.vm.dailyData.quote.sentence,
      );
      expect(quoteWrapper.find('.author').exists()).toBeTruthy();
      expect(quoteWrapper.find('.author').text()).toBe(
        wrapper.vm.dailyData.quote.author,
      );
    });

    it('renders TranslateButton component', () => {
      expect(wrapper.findComponent(TranslateButton).exists()).toBeTruthy();
    });

    it('calls speak method and responsiveVoice is not defined', () => {
      // responsiveVoice is not defined in this scope
      expect(wrapper.vm.speak).toThrow('responsiveVoice is not defined');
    });
  });

  it('renders ellipsis when loading is true', () => {
    store.state.loading = true;
    wrapper = shallowMount(Word, { store, localVue });

    expect(wrapper.find('.lds-ellipsis').exists()).toBeTruthy();
  });

  describe('calculateFontSizeForDailyWord', () => {
    it('returns 10vw when daily word is undefined', () => {
      store.state.dailyData.word.word = undefined;
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.vm.dailyData.word.word).toBe(undefined);
      expect(wrapper.vm.calculateFontSizeForDailyWord).toBe('10vw');
    });

    it("returns 10vw when daily word's length is less than 13", () => {
      store.state.dailyData.word.word = 'abcdefghijkl';
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.vm.dailyData.word.word.length).toBe(12);
      expect(wrapper.vm.calculateFontSizeForDailyWord).toBe('10vw');
    });

    it("returns 9vw when daily word's length is less than 15", () => {
      store.state.dailyData.word.word = 'abcdefghijklmn';
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.vm.dailyData.word.word.length).toBe(14);
      expect(wrapper.vm.calculateFontSizeForDailyWord).toBe('9vw');
    });

    it("returns 8vw when daily word's length is less than 20", () => {
      store.state.dailyData.word.word = 'abcdefghijklmnopqrs';
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.vm.dailyData.word.word.length).toBe(19);
      expect(wrapper.vm.calculateFontSizeForDailyWord).toBe('8vw');
    });

    it("returns 7vw when daily word's length is equal to or more than 20", () => {
      store.state.dailyData.word.word = 'abcdefghijklmnopqrst';
      wrapper = shallowMount(Word, { store, localVue });

      expect(wrapper.vm.dailyData.word.word.length).toBe(20);
      expect(wrapper.vm.calculateFontSizeForDailyWord).toBe('7vw');
    });
  });
});
