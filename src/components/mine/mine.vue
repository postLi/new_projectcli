<template>
    <div id="mine">
        <myHead headMes="个人中心"></myHead>
        <dl>
            <dt v-if="Storage.getItem('name')">
                <div class="myTop">
                    <div class="myTop_l">
                        <img :src="Storage.getItem('imgurl')" v-if="Storage.getItem('imgurl')" />
                        <img src="../../assets/imgs/icon/mine_main.png" v-else />
                    </div>
                    <div class="myTop_r">
                        <dl>
                            <dt>{{nickname}}</dt>
                            <dd>普通会员</dd>
                        </dl>
                    </div>
                </div>
                <div class="myBottom">
                    <img src="../../assets/imgs/icon/mine_big.png" />
                </div>
            </dt>
            <dt v-else>
                <a href="#/login">
                    <span>登录\注册</span>
                </a>
            </dt>
            <dd>
                <a href="#/wishCatalog" v-if="Storage.getItem('name')">
                    <div class="mine_l">
                        <i class="el-icon-star-off"></i>愿望清单
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
                <a href="#/login" v-else>
                    <div class="mine_l">
                        <i class="el-icon-star-off"></i>愿望清单
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
            </dd>
            <dd>
                <a href="#/myOrder" v-if="Storage.getItem('name')">
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>订单
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
                <a href="#/login" v-else>
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>订单
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
            </dd>
            <dd>
                <a href="#/discountCoupon" v-if="Storage.getItem('name')">
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>卡券
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
                <a href="#/login" v-else>
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>卡券
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
            </dd>
            <dd>
                <a href="#/service" v-if="Storage.getItem('name')">
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>客服
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
                <a href="#/login" v-else>
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>客服
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
            </dd>
            <dd>
                <a href="#/address" v-if="Storage.getItem('name')">
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>收货地址管理
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
                <a href="#/login" v-else>
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>收货地址管理
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
            </dd>
            <dd>
                <a href="#/setting" v-if="Storage.getItem('name')">
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>设置
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
                <a href="#/login" v-else>
                    <div class="mine_l">
                        <i class="el-icon-circle-plus"></i>设置
                    </div>
                    <div class="mine_r"><i class="el-icon-circle-plus"></i></div>
                </a>
            </dd>
        </dl>
        <myFoot minePage="active"></myFoot>
    </div>
</template>
<script>
    import '../../sass/mine.scss';
    import myFoot from '../foot/foot.vue';
    import myHead from '../head/head.vue';
    export default{
        components:{
            myFoot:myFoot,
            myHead:myHead
        },
        data(){
            return{
                Storage:window.localStorage,
                nickname:'nickname'
            }
        },
        mounted(){
            if(this.Storage.getItem('name')){
                this.nickname = this.Storage.getItem('name');
            }
        }
    }
</script>