<template>
    <div id="reg">
        <myHead headMes="注册" goToBack="1"></myHead>
        <div class="reg_c">
            <div class="phone">
                <i class="el-icon-circle-plus"></i>
                <input type="text" name="uphone" placeholder="请输入常用手机号" v-model="uphone" />
            </div>
            <div class="psw">
                <i class="el-icon-circle-plus"></i>
                <input type="password" name="password1" placeholder="请输入登录密码" v-model="upsw1" />
            </div>
            <div class="psw">
                <i class="el-icon-circle-plus"></i>
                <input type="password" name="password2" placeholder="请再次输入登录密码" v-model="upsw2" />
            </div>
            <button v-if="uphone&&upsw1&&upsw2" @touchstart.stop="goRegister">下一步</button>
            <button disabled :class="grey" v-else>下一步</button>
            <p class="hint">{{hintMsg}}</p>
        </div>
    </div>
</template>
<script>
    import '../../sass/reg.scss';
    import myHead from '../head/head.vue';
    import http from '../../utils/reqAjax.js';
    export default{
        components:{
            myHead
        },
        data() {
            return {
              grey:'grey',
              upsw1:'',
              upsw2:'',
              uphone:'',
              hintMsg:'',
              Storage:window.localStorage
            }
        },
        mounted() {
            document.querySelector('[name=uphone]').focus();
        },
        methods: {
            goRegister:function(){
              this.uphone = this.uphone.trim();
              this.upsw1 = this.upsw1.trim();
              this.upsw2 = this.upsw2.trim();
              var reg1 = /^1[34578]\d{9}$/;
              var reg2 = /^[a-z][\da-z\-]{5,17}@[\da-z\-]{2,}(\.[a-z]{2,}){1,2}$/i;
              var reg3 = /^[^\.\s]{6,18}$/i;
              if(!reg1.test(this.uphone) && !reg2.test(this.uphone)){
                  this.hintMsg = '请输入正确的手机号或邮箱';
                  var hint = document.querySelector('.hint');
                  hint.style.display = 'block';
                  setTimeout(function(){
                      hint.style.display = 'none';
                  },1500);
              }else if(!reg3.test(this.upsw1) || !reg3.test(this.upsw2)){
                  this.hintMsg = '您输入的密码格式不正确';
                  var hint = document.querySelector('.hint');
                  hint.style.display = 'block';
                  setTimeout(function(){
                      hint.style.display = 'none';
                  },1500);
              }else if(this.upsw1 != this.upsw2){
                  this.hintMsg = '您两次输入的密码不一致';
                  var hint = document.querySelector('.hint');
                  hint.style.display = 'block';
                  setTimeout(function(){
                      hint.style.display = 'none';
                  },1500);
              }else{
                  http.get({url:'http://10.3.136.7:88/reg',params:{username:this.uphone,password:this.psw1}}).then(response => {
                      if(response.data == 'no'){
                          this.hintMsg = '恭喜您，注册成功！';
                          var hint = document.querySelector('.hint');
                          hint.style.display = 'block';
                          setTimeout(function(){
                              hint.style.display = 'none';
                          },1500);
                          this.Storage.setItem('name',this.uphone);
                          setTimeout(()=>{
                              this.$router.replace({path:'/mine'});
                          },1500);
                      }else if(response.data == 'yes'){
                          this.hintMsg = '该用户名已被注册，请重新输入';
                          var hint = document.querySelector('.hint');
                          hint.style.display = 'block';
                          setTimeout(function(){
                              hint.style.display = 'none';
                          },1500);
                      }
                  });
              }
            }
        }
    }
</script>