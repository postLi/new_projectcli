<template>
    <div id="address">
        <myHead goToBack="1" headMes="我的收货地址"></myHead>
        <div class="address_c">
            <div class="cont_t">
                <p>新增地址</p>
            </div>
        </div>
    </div>
</template>
<script>
    import myHead from '../head/head.vue';
    import '../../sass/address.scss';
    export default{
        components:{
            myHead
        }
    }
</script>