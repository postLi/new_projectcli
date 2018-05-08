import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import '../../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueScroller);
// 引入路由文件;
import VueScroller from 'vue-scroller'
import VueLazyLoad from 'vue-lazyload'

import home from '../components/home/home.vue';

var router = new VueRouter({
    routes:[
         {
            path:'/',
            name:'home',
            component:home
        }
    ]
})
export default router;
