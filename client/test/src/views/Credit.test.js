import { mount } from '@vue/test-utils';
import Credit from '../../../src/views/Credit';

const options = {
  computed: {
    dailyData() {
      return {
        photo: {
          user: 'test user',
        },
      };
    },
    photographerData() {
      return {
        name: 'test user',
        username: 'testuser',
      };
    },
  },
};

describe('Credit', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Credit, options);
    expect(wrapper.vm).toBeTruthy();
  });
  it('displays photographer name', () => {
    const wrapper = mount(Credit, options);
    const name = options.computed.dailyData().photo.user;

    expect(wrapper.text()).toContain(`Photo by ${name}`);
  });
  it('links to photographer page', () => {
    const wrapper = mount(Credit, options);
    const username = options.computed.photographerData().username;
    const pageUrl = `https://unsplash.com/@${username}`;

    expect(wrapper.html()).toContain(pageUrl);
  });
});
