<template>
    <div id="myOrder">
        <myHead goToBack="1" :headMes="headMes"></myHead>
        <div class="myOrder_c">
            <div class="myOrder_c_t" @touchstart.stop="change">
                <a href="#/myOrder" class='active'>全部订单</a>
                <a href="#/myOrder">待支付</a>
                <a href="#/myOrder">待发货</a>
                <a href="#/myOrder">待收货</a>
            </div>
            <div class="myOrder_c_b">
                <ul>
                    <li><span>SP尚品</span><span @touchstart="deleteInfo">&times;</span></li>
                    <li>
                        <img src="../../assets/imgs/children/g1.jpg" height="213" width="160" />
                    </li>
                    <li>
                        <span>{{products | totalProduct}}</span>
                        <span>{{price | totalPrice}}</span>
                    </li>
                    <li>{{productStatus}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../sass/myOrder.scss';
    import myHead from '../head/head.vue';
    import Vue from 'vue';
    Vue.filter('totalProduct',function(n){
        return '共件'+n+'商品';
    })
    Vue.filter('totalPrice',function(n){
        return '实付款￥'+n.toFixed(2);
    })
    export default{
        components:{
            myHead
        },
        data(){
            return{
                headMes:'全部订单',
                products:2,
                price:1980,
                productStatus:'已支付'
            }
        },
        methods:{
            change:function(e){
                var lists = document.querySelectorAll('.myOrder_c_t a');
                var len = lists.length;console.log(lists)
                for(var i=0;i<len;i++){
                    lists[i].classList.remove('active');
                }
                e.target.classList.add('active');
                this.headMes = e.target.innerText;
            },
            deleteInfo:function(e){
                var ul = e.target.parentNode.parentNode.parentNode;
                ul.parentNode.remove(ul);
            }
        }
    }
</script>