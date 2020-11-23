import { mount } from '@vue/test-utils';
import Credit from '../../../src/views/Credit';

const photographerData = {
  name: 'test user',
  username: 'testuser',
}
const dailyData = {
  photo: {
    user: photographerData,
  },
};

const options = {
  computed: {
    dailyData: () => dailyData,
    photographerData: () => photographerData,
  },
};

describe('Credit', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Credit, options);
    expect(wrapper.vm).toBeTruthy();
  });
  it ('returns data from `dailyData` when calling `photographerData()`', () => {
    const wrapper = mount(Credit, options);
    const data = Credit.computed.photographerData.call({ dailyData });
    expect(data).toBe(wrapper.vm.dailyData.photo.user);
    expect(data).toMatchObject({ name: 'test user', username: 'testuser' });
  });

  it('displays photographer name', () => {
    const wrapper = mount(Credit, options);
    const { name } = options.computed.dailyData().photo.user;

    expect(wrapper.text()).toContain(`Photo by ${name}`);
  });
  it('links to photographer page', () => {
    const wrapper = mount(Credit, options);
    const username = options.computed.photographerData().username;
    const pageUrl = `https://unsplash.com/@${username}`;

    expect(wrapper.html()).toContain(pageUrl);
  });
});
