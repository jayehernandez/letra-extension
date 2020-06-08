import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import vWow from 'v-wow';
import LoadScript from 'vue-plugin-load-script';
import App from './App';
import store from './store/index';
import router from './router/index';
import './style/app.scss';

Vue.use(vWow);
Vue.use(LoadScript);
Vue.loadScript(process.env.VUE_APP_VOICE_URL);
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
  router,
  debug: { enabled: true },
  set: [{ field: 'checkProtocolTask', value: null }],
});

Vue.filter('titleize', (str) => {
  if (typeof str !== 'string') return '';

  const frags = str.split('-');
  return frags
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});


(() => new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  router,
}))();
