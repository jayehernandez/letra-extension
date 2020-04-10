import Vue from 'vue';
import App from './App';
import store from "./store/index";
import './style/app.scss';
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
// Vue.loadScript("https://code.responsivevoice.org/responsivevoice.js?key=dIZWyNzY");

new Vue({
  el: '#app',
  render: h => h(App),
  store,
});