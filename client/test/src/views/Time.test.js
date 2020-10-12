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

  it('should call getNow()', () => {
    jest.advanceTimersByTime(1000);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it('should render date and time correctly', () => {
    const today = new Date();

    expect(wrapper.find('.time').text()).toBe(
      today.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    );

    expect(wrapper.find('.date').text()).toBe(
      today.toLocaleDateString([], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    );
  });
});
