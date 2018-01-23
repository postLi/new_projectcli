<template>
    <div id="login">
        <myHead goToBack="1" headMes="登录"></myHead>
        <div class="login_c">
            <div class="uname">
                <i class="el-icon-circle-plus"></i>
                <input type="text" name="username" placeholder="请输入手机号/邮箱" v-model="uname" />
            </div>
            <div class="psw">
                <i class="el-icon-circle-plus"></i>
                <input type="password" name="password" placeholder="请输入登录密码" v-model="upsw" />
            </div>
            <button @touchstart="goLogin" v-if="uname&&upsw">登录</button>
            <button disabled :class="grey" v-else>登录</button>
            <p class="hint">{{hintMsg}}</p>
            <div class="change">
                <a href="#/reg">注册账号</a>
                <a href="#/message">短信登录</a>
                <a href="#/findpassword">忘记密码？</a>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../sass/login.scss';
    import myHead from '../head/head.vue';
    import http from '../../utils/reqAjax.js';
    export default{
        components:{
            myHead
        },
        data(){
            return{
                uname:'',
                upsw:'',
                grey:'grey',
                hintMsg:'',
                hasError:false
            }
        },
        mounted(){
            document.querySelector('[name=username]').focus();
        },
        methods:{
            goLogin:function(){
                this.uname = this.uname.trim();
                this.upsw = this.upsw.trim();
                var reg1 = /^1[34578]\d{9}$/;
                var reg2 = /^[a-z][\da-z\-]{5,17}@[\da-z\-]{2,}(\.[a-z]{2,}){1,2}$/i;
                if(!reg1.test(this.uname) && !reg2.test(this.upsw)){
                    this.hintMsg = '请输入正确的手机号或邮箱';
                    var hint = document.querySelector('.hint');
                    hint.style.display = 'block';
                    setTimeout(function(){
                        hint.style.display = 'none';
                    },1500);
                }else{
                    http.post({url:'http://10.3.136.7:88/login',params:{username:this.uname,password:this.upsw}}).then(response => {
                        if(response.data == 'no'){
                            this.hintMsg = '您输入的用户名或密码有误';
                            var hint = document.querySelector('.hint');
                            hint.style.display = 'block';
                            setTimeout(function(){
                                hint.style.display = 'none';
                            },1500);
                        }else if(response.data == 'yes'){
                            console.log(response);
                        }
                    });
                }
            }
        }
    }
</script>