import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ErrorPage from '../../../src/views/ErrorPage';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.directive('wow', { bind() {}, unbind() {} });

describe('ErrorPage', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(ErrorPage, { localVue });
  });
  
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders h1 component', () => {
    expect(wrapper.find('h1').text()).toBe('oops!');
  });

  it('renders quote-container component', () => {
    expect(wrapper.find('.quote-container.sentence').exists()).toBeTruthy();
  });

  it('renders anchor tag a correctly', () => {
    expect(wrapper.find('a').text()).toBe('support tab');
    expect(wrapper.find('a').attributes('href')).toBe(
      'https://chrome.google.com/webstore/detail/letra/cjodkkjokggcaeacdhjliobekbnnmoio',
    );
  });
});
