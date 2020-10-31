import App from '../../../src/App';
import router from '../../../src/router/index';

describe('router', () => {
  it('initialzes the router', () => {
    expect(router).toBeTruthy();
  });
  it('has the main route for the app', () => {
    expect(router.options.routes.length).toEqual(1);
  });
  it('has the path for the route', () => {
    expect(router.options.routes[0].path).toEqual('/');
  });
  it('has the name for the route', () => {
    expect(router.options.routes[0].name).toEqual('Home');
  });
  it('uses `App` component for the route', async () => {
    let component = await router.options.routes[0].component();
    component = component.default; // default export

    expect(component.name).toEqual('App');
    expect(component).toEqual(App);
  });
});
