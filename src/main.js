import Vue from 'vue';
import App from './App';
import store from "./store/index";
import './style/app.scss';

new Vue({
  el: '#app',
  render: h => h(App),
  store,
});