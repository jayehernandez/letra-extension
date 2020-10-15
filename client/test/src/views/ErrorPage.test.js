import { shallowMount, createLocalVue } from '@vue/test-utils';
import ErrorPage from '../../../src/views/ErrorPage';

const localVue = createLocalVue();
localVue.directive('wow', { bind() { }, unbind() { } })

describe('ErrorPage', () => {
  const wrapper = shallowMount(ErrorPage, { localVue });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('displays an error message', () => {
    const errorMessageSelector = '.quote-container'
    const errorMessage = wrapper.find(errorMessageSelector).text()

    expect(errorMessage).toContain('An error occurred.');
    expect(errorMessage).toContain('Please go to the support tab of the extension if this continues!');
  });

  it('links to the Letra extension in the web store', () => {
    const webStoreLinkSelector = 'a.is-text-primary.is-underlined'

    expect(wrapper.find(webStoreLinkSelector).attributes().href)
      .toBe('https://chrome.google.com/webstore/detail/letra/cjodkkjokggcaeacdhjliobekbnnmoio')
  });
});
