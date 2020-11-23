import { shallowMount } from '@vue/test-utils';
import { jest } from '@jest/globals';
import Time from '../../../src/views/Time';

describe('Time', () => {
  let dateSpy;
  let wrapper;

  beforeAll(() => {
    jest.useFakeTimers();

    const mockDate = new Date('2020-03-10, 1:23:45 PM');
    const mockDate2 = new Date(mockDate.getTime());

    // Make `new Date()` return this specific date
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    // Force `en-US` as the locale since the default value can be different on
    // different developers' machines
    mockDate.toLocaleTimeString = (locales, options) =>
      mockDate2.toLocaleTimeString('en-US', options);
    mockDate.toLocaleDateString = (locales, options) =>
      mockDate2.toLocaleDateString('en-US', options);

    wrapper = shallowMount(Time);
  });

  afterAll(() => {
    dateSpy.mockRestore();
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
    expect(wrapper.find('.time').text()).toBe('01:23 PM');
    expect(wrapper.find('.date').text()).toBe('March 10, 2020');
  });
});
