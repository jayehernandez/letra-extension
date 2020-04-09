import Vue from 'vue';
import App from './App';
import store from "./store/index";

new Vue({
  el: '#app',
  render: h => h(App),
  store,
});