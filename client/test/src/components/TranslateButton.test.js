import { mount } from '@vue/test-utils';
import TranslateButton from '../../../src/components/TranslateButton';

describe('RandomButton', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(TranslateButton);
    expect(wrapper).toBeTruthy();
  });
  it('has the icon class', () => {
    const wrapper = mount(TranslateButton);
    expect(wrapper.find('.icon').exists()).toBeTruthy();
  });
  it('calls the emit event on button click', () => {
    const wrapper = mount(TranslateButton);
    wrapper.find('.icon').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });
});
