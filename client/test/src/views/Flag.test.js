import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Flag from '../../../src/views/Flag';

const localVue = createLocalVue();
localVue.filter('titleize', str => {
  if (typeof str !== 'string') return '';

  const frags = str.split('-');
  return frags
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
localVue.use(Vuex);

describe('Flag', () => {
  let wrapper;
  let store;

  beforeAll(() => {
    store = new Vuex.Store({
      state: {
        dailyData: {
          word: {
            language: 'german',
          },
          language: {
            flag: 'twa-germany-flag',
          },
        },
      },
    });

    wrapper = shallowMount(Flag, { store, localVue });
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders i component', () => {
    expect(wrapper.find('i').exists()).toBeTruthy();
  });

  it('displays the correct flag', () => {
    const { flagClass } = wrapper.vm;
    const iconComponent = wrapper.find('i');

    expect(flagClass).toBe('twa twa-4x twa-germany-flag');
    expect(iconComponent.classes()).toContain('twa-germany-flag');
  });

  it('does not render the language name component at first', () => {
    const { showLanguage } = wrapper.vm;
    const languageNameComponent = wrapper.find('.language-name');

    expect(showLanguage).toBe(null);
    expect(languageNameComponent.exists()).toBe(false);
  });

  it('renders the language name component after flag was hovered', async () => {
    await wrapper.find('i').trigger('mouseover');

    const { showLanguage } = wrapper.vm;
    const languageNameComponent = wrapper.find('.language-name');

    expect(showLanguage).not.toBeNull();
    expect(languageNameComponent.exists()).toBe(true);
  });

  it("has the correct showLanguage value and classes according to flag's hover state", async () => {
    await wrapper.find('i').trigger('mouseover');
    expect(wrapper.vm.showLanguage).toBe(true);
    expect(wrapper.find('.language-name').classes()).toContain('fadeInDown');

    await wrapper.find('i').trigger('mouseleave');
    expect(wrapper.vm.showLanguage).toBe(false);
    expect(wrapper.find('.language-name').classes()).toContain('fadeOutUp');
  });

  it('displays the correct language', () => {
    const { flagLanguage } = wrapper.vm;
    const languageNameComponent = wrapper.find('.language-name');

    expect(flagLanguage).toBe('german');
    expect(languageNameComponent.text()).toBe('German');
  });
});
