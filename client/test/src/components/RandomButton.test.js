import { mount } from '@vue/test-utils';
import RandomButton from '../../../src/components/RandomButton';

describe('RandomButton', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(RandomButton);
    expect(wrapper).toBeTruthy();
  });
  it('has the icon class', () => {
    const wrapper = mount(RandomButton);
    expect(wrapper.find('.icon').exists()).toBeTruthy();
  });
  it('calls the emit event on button click', () => {
    const wrapper = mount(RandomButton);
    wrapper.find('#random-button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });
});
