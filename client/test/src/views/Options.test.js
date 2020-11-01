import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Options from '../../../src/views/Options';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.directive('click-outside', { bind() {}, unbind() {} });
localVue.directive('wow', { bind() {}, unbind() {} });

const languageOptions = ['bangla', 'brazilian-portuguese'];

describe('Options', () => {
  const store = new Vuex.Store({
    state: {
      languageOptions,
    },
    actions: {
      getLanguageOptions: () => languageOptions,
    },
  });
  const wrapper = shallowMount(Options, { store, localVue });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  describe('`customLabel` method', () => {
    it('returns an empty string for non-string inputs', () => {
      expect(wrapper.vm.customLabel()).toBe('');
      expect(wrapper.vm.customLabel(undefined)).toBe('');
      expect(wrapper.vm.customLabel(null)).toBe('');
      expect(wrapper.vm.customLabel({})).toBe('');
      expect(wrapper.vm.customLabel([])).toBe('');
      expect(wrapper.vm.customLabel(100)).toBe('');
      expect(wrapper.vm.customLabel(true)).toBe('');
      expect(wrapper.vm.customLabel(Symbol('foo'))).toBe('');
    });
    it('converts single-word values to Title Case', () => {
      const result = wrapper.vm.customLabel(languageOptions[0]);
      expect(result).toBe('Bangla');
    });
    it('converts multi-word values to Title Case and hyphens to spaces', () => {
      const result = wrapper.vm.customLabel(languageOptions[1]);
      expect(result).toBe('Brazilian Portuguese');
    });
  });
});
