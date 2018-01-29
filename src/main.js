import Vue from 'vue'
import router from './routers/index'
import App from './App.vue'
import ElementUI from '../node_modules/element-ui'
import Rem from './utils/getRem';
import './sass/base.scss';
import './assets/css/animate.css';
import './assets/font-icon11/iconfont.css';
Rem.rem();
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

