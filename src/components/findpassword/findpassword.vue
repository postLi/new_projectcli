<template>
    <div id="findpassword">
        <myHead headMes="找回密码" goToBack="1"></myHead>
        <div class="findpassword_c">
            <div class="phone">
                <i class="el-icon-circle-plus"></i>
                <input type="text" name="uphone" placeholder="请输入常用手机号/邮箱" v-model="uphone" />
            </div>
            <div class="yanZ">
                <i class="el-icon-circle-plus"></i>
                <input type="text" name="yanZ" placeholder="请输入图形验证码" v-model="uyanZ" />
                <div class="code" @click="refreshCode">
                    <identify :identifyCode="identifyCode"></identify>
                </div>
            </div>
            <button v-if="uphone&&uyanZ">下一步</button>
            <button :class="grey" disabled v-else>下一步</button>
        </div>
    </div>
</template>
<script>
    import '../../sass/findpassword.scss';
    import myHead from '../head/head.vue';
    import identify from '../identify/identify.vue';
        export default{
            components:{
                myHead:myHead,
                identify:identify
            },
            data() {
                return {
                  identifyCodes: "1234567890",
                  identifyCode: "",
                  grey:"grey",
                  uphone:'',
                  uyanZ:''
                };
            },
            mounted() {
                document.querySelector('[name=uphone]').focus();
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            methods: {
                randomNum(min, max) {
                  return Math.floor(Math.random() * (max - min) + min);
                },
                refreshCode() {
                  this.identifyCode = "";
                  this.makeCode(this.identifyCodes, 4);
                },
                makeCode(o, l) {
                  for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                      this.randomNum(0, this.identifyCodes.length)
                    ];
                  }
                  console.log(this.identifyCode);
                }
            }
        }
</script>