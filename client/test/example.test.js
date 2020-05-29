import { mount } from '@vue/test-utils';
import OptionsButton from '../src/components/OptionsButton';

describe('OptionsButton', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(OptionsButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
