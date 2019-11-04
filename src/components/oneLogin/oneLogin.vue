<template >
  <!-- vue实例外创建 -->
  <div class="page">
    <div id="header">
      <router-link :to="{name:'dl'}">
        <span class="icon icon-goback"></span>
      </router-link>
      <span class="text-header">京东注册</span>
    </div>
    <div class="wrap">
      <div class="input-container">
        <label class="area-box">
          <span class="area_code">+86</span>
          <i class="area_icon"></i>
        </label>
        <input
          v-model="num"
          type="tel"
          report-eventid="MLoginRegister_PhoneInput"
          placeholder="请输入手机号"
          maxlength="11"
          v-on:input="jt"
          class="acc-input mobile J_ping"
        />
        <!---->
      </div>
      <p class="notice"></p>

      <a @click="go" :class="[{red:isRed},'btn']">下一步</a>
    </div>
    <!---->
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
export default {
  data() {
    return {
      num: "",
      isRed: false,
      reg: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    };
  },
  mounted() {},
  methods: {
    jt() {
      this.reg.test(this.num) ? (this.isRed = true) : (this.isRed = false);
      console.log(this.num);
    },
    go() {
      this.$store.commit("setUser", this.num);
      this.isRed ? this.$router.push('twoLogin') : this.isRed = false;
    }
  }
};
</script>
<style scoped lang="less">
.red {
  background: #f00 !important;
}
.page {
  text-align: left;
  background: #fff;
  padding: 0 25px 25px;
}
.wrap {
  margin-top: 20px;
  height: 159px;
}
.input-container {
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  background: #fff;
  border-bottom: 1px solid #efefef;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#header {
  display: block;
  position: relative;
  height: 44px;
  line-height: 44px;
  background: #fff;
  font-size: 17px;
  z-index: 999;
}
.notice {
  color: #e2231a;
  font-size: 14px;
  padding-top: 9px;
}
.btn {
  margin-top: 50px;
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
  box-shadow: 0 1px 20px 0 rgba(255, 62, 62, 0.2);
  text-align: center;
  font-family: PingFangSC-Semibold;
}
#header {
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
.area_icon {
  position: absolute;
  top: 0.22rem;
  right: 0.08rem;
  width: 0.14rem;
  height: 0.06rem;
  overflow: hidden;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAMCAYAAABx290PAAAABGdBTUEAALGPC/xhBQAAAU9JREFUOBGtVC1PxEAQ7R5JqzBVNYSkVU3gX5wBfgEaAniCwuIIHsjpQ6Jwx09AIZo0aRPAU4Fqk7a8d3TIHHfXj4Q1Mzsfb/btvtb4vr9vjLm1ftZVkiT3jf8vJgiCUwBdEqyu6zODwDucLYU+cxznOIqiNxUb7IZhuJ3n+QSNY2kGsY+RbJQdF0Xx2pxMhfu77CUGOn6HSbfBlR5g8gNYbkpQ2UFsV7ESLMz4wozDUZqmT7Zt7yIxk6Syvdm2sSI2Z3CWUeBWc43XQ9h2sQL+BYR4J3M2xKHNsuzF87xpWZY72Po6x31VVUeu636yjjkeELWPcEPu/yw+x14cx886vsBQJ7rYNrXLosBbIbfASuOuHciituvSIMrvFFnrQAHqYGtRgahdy0pwaFd9hzo/9/noLUqeK1ALYwlABXoxVPUUyglUfM4YmN0M/RV+A2uMnQpiFNqoAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: inline-block;
  margin-left: 0.06rem;
}
</style>