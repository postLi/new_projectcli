import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import '../../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter);
Vue.use(ElementUI);

// 引入路由文件;

import home from '../components/home/home.vue';
// import head from '../components/head/head.vue';
import mine from '../components/mine/mine.vue';
import reg from '../components/reg/reg.vue';
import login from '../components/login/login.vue';
import message from '../components/message/message.vue';
import findpassword from '../components/findpassword/findpassword.vue';
import search from '../components/search/search.vue';
import wishCatalog from '../components/wishCatalog/wishCatalog.vue';
import myOrder from '../components/myOrder/myOrder.vue';
import discountCoupon from '../components/discountCoupon/discountCoupon.vue';
import service from '../components/service/service.vue';
import payMethod from '../components/service/payMethod.vue';
import deliveryExplain from '../components/service/deliveryExplain.vue';
import userSafe from '../components/service/userSafe.vue';
import address from '../components/address/address.vue';
import setting from '../components/setting/setting.vue';
import billExplain from '../components/explainInfo/billExplain.vue';
import returnProduct from '../components/explainInfo/returnProduct.vue';
import returnExplain from '../components/explainInfo/returnExplain.vue';
import returnCare from '../components/explainInfo/returnCare.vue';
import returnPrice from '../components/explainInfo/returnPrice.vue';
import afterSale from '../components/explainInfo/afterSale.vue';
import honest from '../components/explainInfo/honest.vue';
import onlinePay from '../components/paymentMethods/onlinePay.vue';
import discountCouponPay from '../components/paymentMethods/discountCouponPay.vue';

var router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:home
        },
        {
            path:'/search',
            name:'search',
            component:search
        },
        {
            path:'/mine',
            name:'mine',
            component:mine
        },
        {
            path:'/reg',
            name:'reg',
            component:reg
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/message',
            name:'message',
            component:message
        },
        {
            path:'/findpassword',
            name:'findpassword',
            component:findpassword
        },
        {
            path:'/wishCatalog',
            name:'wishCatalog',
            component:wishCatalog
        },
        {
            path:'/myOrder',
            name:'myOrder',
            component:myOrder
        },
        {
            path:'/discountCoupon',
            name:'discountCoupon',
            component:discountCoupon
        },
        {
            path:'/service',
            name:'service',
            component:service,
            children:[
                {path:'payMethod',
                name:'payMethod',
                component:payMethod},
                {path:'deliveryExplain',
                name:'deliveryExplain',
                component:deliveryExplain},
                {path:'userSafe',
                name:'userSafe',
                component:userSafe}
            ]
        },
        {
            path:'/address',
            name:'address',
            component:address
        },
        {
            path:'/setting',
            name:'setting',
            component:setting
        },
        {
            path:'/billExplain',
            name:'billExplain',
            component:billExplain
        },
        {
            path:'/returnProduct',
            name:'returnProduct',
            component:returnProduct
        },
        {
            path:'/returnExplain',
            name:'returnExplain',
            component:returnExplain
        },
        {
            path:'/returnCare',
            name:'returnCare',
            component:returnCare
        },
        {
            path:'/returnPrice',
            name:'returnPrice',
            component:returnPrice
        },
        {
            path:'/afterSale',
            name:'afterSale',
            component:afterSale
        },
        {
            path:'/honest',
            name:'honest',
            component:honest
        },
        {
            path:'/onlinePay',
            name:'onlinePay',
            component:onlinePay
        },
        {
            path:'/discountCouponPay',
            name:'discountCouponPay',
            component:discountCouponPay
        }
    ]
})
export default router;
