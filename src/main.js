import Vue from 'vue';
import App from './App';
import store from "./store/index";
import './style/app.scss';
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
// Vue.loadScript("https://code.responsivevoice.org/responsivevoice.js?key=dIZWyNzY");

Vue.filter('titleize', ((str) => {
  if (typeof str !== 'string') return '';

  const frags = str.split('_');
  return frags.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}));

new Vue({
  el: '#app',
  render: h => h(App),
  store,
});