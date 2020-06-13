import { mount } from '@vue/test-utils';
import OptionsButton from '../../../src/components/OptionsButton';

describe('OptionsButton', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(OptionsButton);
    expect(wrapper).toBeTruthy();
  });
  it('gets the name of the component', () => {
    const wrapper = mount(OptionsButton);
    expect(wrapper.name()).toEqual('OptionsButton');
  });
  it('has the icon class', () => {
    const wrapper = mount(OptionsButton);
    expect(wrapper.find('.icon').exists()).toBeTruthy();
  });
  it('calls the emit event on button click', () => {
    const wrapper = mount(OptionsButton);
    wrapper.find('#options-button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });
});
