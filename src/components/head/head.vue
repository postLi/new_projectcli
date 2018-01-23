<template>
    <header id="head">
        <div class="head_l" v-show="goToBack==1 || selectGender==1">
            <a href="javascript:history.go(-1)" v-show="goToBack==1"><i class="el-icon-arrow-left"></i></a>
            <a href="/selectGender" v-show="selectGender==1"><i class="el-icon-circle-plus" v-show="choose==1"></i></a>
        </div>
        <span>{{headMes}}</span>
        <div class="head_r">
            <a href="#/search"><i class="el-icon-search" @touchstart="show"></i></a>
            <a href="#/home" v-show="goHome==1"><i class="el-icon-circle-plus"></i></a>
            <a href="#/buyCar" v-show="!(goCar==1)">
                <i class="el-icon-goods"></i>
                <i v-show="Storage.getItem('name')">0</i>
            </a>
        </div>
    </header>
</template>
<script>
    import '../../sass/head.scss';
    export default{
        data(){
            return{
                Storage:window.localStorage
            }
        },
        props:['goToBack','headMes','choose','selectGender','goHome','goCar'],
        methods:{
            show:function(){
                this.Storage.setItem('name','');
                console.log(this.Storage.getItem('name'));
            }
        }
    }
</script>