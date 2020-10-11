import { shallowMount } from '@vue/test-utils';
import { jest } from '@jest/globals';
import Time from '../../../src/views/Time';

describe('Time', () => {
  let wrapper;

  beforeAll(() => {
    jest.useFakeTimers();
    wrapper = shallowMount(Time);
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders date component', () => {
    expect(wrapper.find('.date').exists()).toBeTruthy();
  });

  it('renders time component', () => {
    expect(wrapper.find('.time').exists()).toBeTruthy();
  });

  test('should call getNow()', () => {
    jest.advanceTimersByTime(1000);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
