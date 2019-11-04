<template>
  <div class="page">
    <div id="header">
      <span @click="goback" class="icon icon-goback"></span>
      <span class="text-header">京东注册</span>
    </div>
    <div class="wrap">
      <div class="notice-wrap">
        <i class="pwd-icon"></i>
        <p class="notice-info">请设置登录密码</p>
      </div>
      <div class="input-container pwd-container">
        <input
          v-model="num"
          placeholder="请设置8-20位登录密码"
          report-eventid="MLoginRegister_PasswordInput"
          type="password"
          v-on:input="Text"
          class="acc-input password J_ping"
        />
        <!---->
        <div :class="{none:isnone}" style="border-radius: 5px;
    display: block;
    width: 120px;
    margin-left: -60px;
    margin-top: -200px;
    text-align: center;
    height: 35px;
    line-height: 35px;
    color: red;
    background: rgba(33,3,33,0.5);
    position: fixed;
    top: 50%;
    left: 50%;">{{States}}</div>
        <div report-eventid="MLoginRegister_RegisterPlaintext" class="checkbtn J_ping"></div>
      </div>
      <p :class="[{tive:istive},'set-notice', 'def' ]">{{pt}}</p>
      <a @click="login" :class="[{red:isRed},'btn', 'J_ping']">完成</a>
      <div class="question-box">
        <span>遇到问题？请</span>
        <a report-eventid="MLoginRegister_SetNewPasswordHelp" class="customer-service J_ping">联系客服</a>
      </div>
    </div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
export default {
  data() {
    return {
      num: "",
      pt:
        "密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写",
      States: "",
      isRed: false,
      isnone: true,
      istive: false,

      reg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
    };
  },
  created() {
    // this.$store.getters.getSname;
    // var self=this;
  },
  methods: {
    Text() {
      window.console.log(this.reg.test(this.num));
      this.reg.test(this.num) ? (this.isRed = true) : (this.isRed = false);
      if (this.num.length > 0) {
        this.istive = true;
        if (this.isRed == true) {
          this.pt = "";
          console.log("t");
        } else {
          this.istive = true;
          console.log("f");
        }
      } else if (this.num.length == 0) {
        this.istive = false;
      }
    },
    goback() {
      this.$router.push("oneLogin");
    },
    login() {
      var self=this;
      console.log(this)
      if (this.isRed == true) {
        this.axios
          .get(
            `http://localhost:3000/login?name=${this.$store.getters.getUser}&password=${this.num}`
          )
          .then(function(response) {
            response.data ? self.States = "注册成功": self.States = "该用户已存在";
            console.log(self)
            console.log(response);
           self.isnone = true;
            setTimeout(function() {
              self.isnone = false;
            },2000);
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          })
          .then(function() {
            // always executed
          });
      }
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
#app {
  text-align: center;
  font-size: 0.16rem;
}
html {
  font-size: 100px !important;
}
.red {
  background: #f00 !important;
}
.tive {
  color: red !important;
  display: block !important;
}
.none {
  display: block !important;
}
.page {
  text-align: left;
  background: #fff;
  padding: 1rem 1rem;
  width: 375px;
  height: 454px;
}
#header {
  display: block;
  position: relative;
  height: 44px;
  line-height: 44px;
  background: #fff;
  font-size: 17px;
  z-index: 999;
  text-align: center;
}
.icon-goback {
  top: 10px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAYpJREFUaAXtmLFOwzAQhhvKE2Rnygu1EhIDezeeho2doRIDG++BhARDNvY8QZX+f6ilArbjs1t0FmcpcWPfnf/v6sinLBbWLAOWAcuAZeA/Z6A5FXzXdSvEuj/E2/R9/3Kq2LE4l7HJ1DmIvxnH8RH2S/o0TfOA7oq/z90uShf4Kb40ntS/CCAgfgcRd1IhufbZACHx2D632P/PuYKkflkv8Yz4rVREib0YQJN4gosAtIkXAWgUnwygVXwSgGbxswDaxUcBahAfBKhFvBcA4lcozJ4wORVmNELbHU7YPz2kvpaO332lBEviKsQTzQcQR1Y26wNgJcmK0rUla32+F25AU3+8VSZdwzC8t237gYc1LgfIfs1xzL9NhkpuvwCoiyJrgfAC1AQRBKgFIgpQA8QsgHaIJADNEMkAWiFEABohxADaILIAEiBeeaLT7tzNlQpZ6+AD1pZlNpy/1U54dh95s+JKnIoAuFAAQqKhyLYY4AjiGv/GJy+MbYpUmbNlwDJgGbAMWAYSM7AH/J4Amlfxzk4AAAAASUVORK5CYII=);
  width: 24px;
  height: 24px;
  overflow: hidden;
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.wrap {
  margin-top: 1.5rem;
  width: 100%;
  height: 365px;
}
.notice-wrap {
  text-align: center;
  width: 100%;
  height: 139.4px;
}
.pwd-icon {
  width: 88px;
  height: 71px;
  background: url(https://plogin.m.jd.com/mreg/static/img/pwd_icon.fa526d8.png)
    no-repeat;
  background-size: cover;
  margin: 0 auto;
  display: block;
}
.notice-info {
  font-size: 16px;
  color: #2e2d2d;
  letter-spacing: 0;
  padding: 15px 0 35px;
}
.pwd-container {
  padding-right: 5px;
  width: 100%;
  height: 50px;
  margin-top: 0;
}
.input-container {
  height: 50px;
  padding-top: 1px;
  padding-bottom: 1px;
  position: relative;
  overflow: hidden;
  margin-top: 1px;
  background: #fff;
  border-bottom: 0.01rem solid #efefef;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.acc-input {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
}
input {
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  line-height: normal;
  border-radius: 0;
  border: none;
  font-size: 0.16rem;
  outline: none;
}
.checkbtn {
  position: absolute;
  display: block;
  width: 0.24rem;
  height: 0.24rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAl5JREFUaAXtlE1rE2EQx/PSQIkphQihHhcUklNIcilUihYEDx76FXwBBSt4LkIpiF/ACAq+XPwAPXhoEdoiBHrIC7mYgIUclYIBMYbSuIm/wa5s1s2TtY2IMA/MzjPPzPxn5r/PbiikSxlQBpQBZUAZUAaUAWVAGVAGlAFlQBlQBpSBf8FAeFzRSqUyT8zVSCTyNpfLlcbFT8Jfq9UW+v3+FbA2C4XCngnTOADNFwaDgQBMIXY4HF4G8I0J8LQ+al6j5gY4UeQ7NeepWRmFGxnlOD5fREvzsqIAv4adCz/NyT8FW2pIrWN0qS09jFzGAZh+CzlyZc/atr31N4YQTMGm1qxTT2pLD47tp40D5PP59zBy35NocT9L5XL5ouf8xKZgCSYAlhtEaksP7jPv3vgNOMHcyxeA3XBs0TDT56wYi8VWs9nsN7cv6L5er5/p9XqPwFoBa4hMzl5y92+Owwo0AODRarX6BH3bB/ATxYrxePxpJpP57OP/7ajRaJztdrt3wFvBOecNAO8ZzN9F216f1w40gJPEm1hjv0Zhv7xDCu7i3+aXW0I+sj9AZKW4IueQBfZL5F9CTyNDi/wBB+swvz7kMBh+jRjCQyHexCINPEcm+jei+Q/ILZh/Z2zA4/zjASS/1WpNt9vtBwwhV+DXX8ODHdT8QuPFZDL50LKsw6BJTtyJBnCSm83mTKfTuU4D9xjmvHMeRJOzT87jRCLxKp1Ofw2S4xdzqgHcgHwfMsAScpnGLHSKJlMSgy3fwgF2C72DbHPP99G6lAFlQBlQBpQBZUAZUAaUgf+YgR8RmtPGSJ6MGgAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 100% auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  top: 0.13rem;
  right: 0;
}
input[type="password"] {
  -webkit-text-security: disc !important;
}

input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}

.set-notice {
  color: #e2231a;
  font-size: 14px;
  padding-top: 9rem;
}
.def {
  color: #c6c6c6;
  display: none;
}
.btn {
  margin-top: 5px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: block;
  background-color: #efefef;
  border-radius: 25px;
  font-size: 16px;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #fab3b3),
    color-stop(73%, #ffbcb3),
    to(#ffcaba)
  );
  background-image: -webkit-linear-gradient(
    left,
    #fab3b3,
    #ffbcb3 73%,
    #ffcaba
  );
  background-image: -o-linear-gradient(
    left,
    #fab3b3 0,
    #ffbcb3 73%,
    #ffcaba 100%
  );
  background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
  -webkit-box-shadow: 0 0.1rem 20px 0 rgba(255, 62, 62, 0.2);
  box-shadow: 0 0.1rem 20px 0 rgba(255, 62, 62, 0.2);
  text-align: center;
  font-family: PingFangSC-Semibold;
}
.set-notice {
  color: #e2231a;
  font-size: 14px;
  padding-top: 9px;
}
.def {
  color: #c6c6c6;
}
.question-box {
  color: #999;
  margin-top: 21px;
  font-size: 14px;
}
.question-box {
  color: #999;
  margin-top: 21px;
  font-size: 14px;
}
.customer-service {
  color: #3b7adb;
}
</style>