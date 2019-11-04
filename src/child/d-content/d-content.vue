<template id="temp">
  <!-- vue实例外创建 -->
  <div   class="page">
    <div     id="header">
      <router-link :to="{ name:'home'
      }" > <span   class="icon icon-goback"></span></router-link>
      <span   class="text-header">京东登录注册</span>
    </div>
    <!---->
    <div  >
      <p   class="input-container">
        <input
           
          id="username"
          placeholder="用户名/邮箱/手机号"
          type="text"
          autocomplete="off"
          report-eventid="MLoginRegister_Username"
          class="acc-input username J_ping"
        />
        <i   class="icon icon-clear" style="display: none;"></i>
      </p>
      <p   class="input-container">
        <input
           
          id="pwd"
          placeholder="请输入密码"
          type="password"
          autocomplete="off"
          report-eventid="MLoginRegister_Password"
          class="acc-input pwd J_ping"
        />
        <i   class="icon icon-clear pwd-clear" style="display: none;"></i>
        <span   report-eventid="MLoginRegister_Plaintext" class="checkbtn J_ping"></span>
        <span
           
          report-eventid="MLoginRegister_FindPassword"
          class="J_ping text-btn"
        >忘记密码</span>
      </p>
    </div>
    <div   style="display: none;">
      <p   class="input-container">
        <label   class="area-box J_ping" report-eventid="MLoginRegister_AreaCode">
          <span class="area_code">+86</span>
          <i class="area_icon"></i>
        </label>
        <input
           
          placeholder="请输入手机号"
          type="tel"
          report-eventid="MLoginRegister_SMSPhoneInput"
          class="acc-input mobile J_ping"
        />
        <!---->
      </p>
      <p   class="input-container">
        <input
           
          id="authcode"
          placeholder="请输入收到的验证码"
          type="tel"
          autocomplete="off"
          report-eventid="MLoginRegister_VerificationInput"
          class="acc-input J_ping authcode"
        />
        <i   class="icon icon-clear mobile-clear" style="display: none;"></i>
        <button
           
          report-eventid="MLoginRegister_SMSReceiveCode"
          class="getMsg-btn text-btn J_ping timer"
        >获取验证码</button>
      </p>
    </div>
    <div   class="notice"></div>
    <a   report-eventid="MLoginRegister_Login" class="btn J_ping">登 录</a>
    <a   report-eventid="MLoginRegister_MLogin" class="btn btn-onestep J_ping">一键登录</a>
    <p   class="quick-btn">
      <span
         
        report-eventid="MLoginRegister_SMSVerification"
        class="J_ping planBLogin"
      >短信验证码登录</span>
      <router-link :to="{name:'oneLogin'}">
      <span
         
        report-eventid="MLoginRegister_PhoneRegister"
        class="J_ping quickReg"
      >手机快速注册</span></router-link>
    </p>
    <div  class="quick-login">
      <h4   class="txt-otherLogin">其他登录方式</h4>
      <p  class="quick-type">
        <a
          
          report-eventid="MLoginRegister_QQLogin"
          class="J_ping quick-qq txt-qq icon-mlogin icon-qq"
        >QQ</a>
        <a
           
          report-eventid="MLoginRegister_WxLogin"
          class="J_ping quick-wx txt-wechat icon-mlogin icon-wx"
        >微信</a>
        <!---->
      </p>
    </div>
    <p   class="policy_tip">
      <span  style="display: none;">未注册的手机号验证后将自动创建京东账号,</span>登录即代表您已同意
      <a   href="//in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>
    </p>
    <div     style="display: none;">
      <div   class="modal-wrap">
        <div   class="modal-mask"></div>
        <div   class="modal-content">
          <p  >我们检测到您是已有历史订单的京东用户，为验证您的账户安全，请输入历史收货人进行校验（任意一个即可）。</p>
          <p   class="input-container">
            <input
               
              id="receivename"
              placeholder="历史已完成订单中的收货人"
              type="text"
              class="acc-input J_ping"
            />
            <i   class="icon icon-clear" style="display: none;"></i>
          </p>
          <p   class="error-tip"></p>
          <p   class="modal-footer">
            <a   class="btn">遇到问题</a>
            <a   class="btn">完成校验</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
export default {
  data() {
    return {
      names:""
    }
    
  },
  created () {
      
    }
};
</script>
<style scoped lang="less">
    .page {
    text-align: left;
    background: #fff;
    padding: 0 1.25rem .25rem;
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
// .icon {
//     position: absolute;
//     width: .24rem;
//     height: 100%;
//     background-repeat: no-repeat;
//     background-size: 100% auto;
//     background-position: 0;
// }
#header {
    text-align: center;
}#header {
    display: block;
    position: relative;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 17px;
    z-index: 999;
}
#header {
    text-align: center;
}
.input-container {
    margin-top: .2rem;
}
.input-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: .5rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    overflow: hidden;
    margin-top: .1rem;
    background: #fff;
    border-bottom: .01rem solid #efefef;
}
.acc-input {
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: normal;
    border-radius: 0;
    border: 0;
    font-size: 1rem;
    outline: none;
}
.icon-clear {
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
}
.icon-clear, .input-box i.icon-clear {
    right: .05rem;
}
.input-container {
    margin-top: .2rem;
}

.input-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 3.5rem !important;
    padding-top: .1rem;
    padding-bottom: .1rem;
    overflow: hidden;
    margin-top: .1rem;
    background: #fff;
    border-bottom: .01rem solid #efefef;
}
.acc-input {
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.pwd-clear {
    right: 1.3rem;
}

.icon-clear {
        position: absolute;
    width: 1.24rem;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
}
.icon-clear, .input-box i.icon-clear {
    right: .05rem;
}
.checkbtn {
    position: absolute;
    right: 1rem;
    top: .13rem;
    width: .24rem;
    height: .24rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAADNzc3Ozs7W1tbNzc3Pz8/Nzc3MzMzNzc3MzMzNzc3Nzc3Nzc3Nzc3Nzc3MzMzNzc3Nzc3MzMzNzc3Ozs7Nzc3Ozs7R0dHX19f////MzMxg+QCeAAAAGnRSTlMA+zoKaiT28One25uCfXPIt6eRTD4zKiETA+EbngEAAACZSURBVEjH7czHDsMgEEXRoYMxuLf5/w8NJIvIlEjJLhJned9ooGma5je0p1+NG0GyQMUSxi1pHhGVgCKhwuiTuJMQjSjemzCRPc0cA00hQzUGPB9s7GRm98pmEruF3GUx0u58t9NpjOwFJQ6f5OjpwdhB/ShfxUHF2mFBt0IV6xUmVM/gE8a723eenecEnwYjpRkmLqBp/tgDwI4Nr7IO2JwAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: 100% auto;
    z-index: 99;
}
.input-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: .5rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    overflow: hidden;
    margin-top: .1rem;
    background: #fff;
    border-bottom: .01rem solid #efefef;
}
.text-btn {
    position: absolute;
    height: .23rem;
    line-height: .23rem;
    right: 0;
    top: 1.75rem;
    text-align: center;
    padding: 0 .1rem 0 .15rem;
    border-left: 1px solid #ccc;
    font-size: 1;
}
.input-container{
    margin-top: .2rem;
}
.area-box {
    position: absolute;
    width: .72rem;
    height: .5rem;
    top: 0;
    left: 0;
    line-height: .5rem;
}
.area-box span {
    font-family: PingFangSC-Semibold;
    display: inline-block;
    text-align: center;
    width: .5rem;
}
.area_icon {
    position: absolute;
    top: .22rem;
    right: .08rem;
    width: .14rem;
    height: .06rem;
    overflow: hidden;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAMCAYAAABx290PAAAABGdBTUEAALGPC/xhBQAAAU9JREFUOBGtVC1PxEAQ7R5JqzBVNYSkVU3gX5wBfgEaAniCwuIIHsjpQ6Jwx09AIZo0aRPAU4Fqk7a8d3TIHHfXj4Q1Mzsfb/btvtb4vr9vjLm1ftZVkiT3jf8vJgiCUwBdEqyu6zODwDucLYU+cxznOIqiNxUb7IZhuJ3n+QSNY2kGsY+RbJQdF0Xx2pxMhfu77CUGOn6HSbfBlR5g8gNYbkpQ2UFsV7ESLMz4wozDUZqmT7Zt7yIxk6Syvdm2sSI2Z3CWUeBWc43XQ9h2sQL+BYR4J3M2xKHNsuzF87xpWZY72Po6x31VVUeu636yjjkeELWPcEPu/yw+x14cx886vsBQJ7rYNrXLosBbIbfASuOuHciituvSIMrvFFnrQAHqYGtRgahdy0pwaFd9hzo/9/noLUqeK1ALYwlABXoxVPUUyglUfM4YmN0M/RV+A2uMnQpiFNqoAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: inline-block;
    margin-left: .06rem;
}
.mobile {
    width: 100%;
    padding-left: .7rem;
}
.acc-input {
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.input-container{
    margin-top: .2rem;
}

.input-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: .5rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    overflow: hidden;
    margin-top: .1rem;
    background: #fff;
    border-bottom: .01rem solid #efefef;
}
.authcode {
    padding-right: .3rem;
}
.acc-input {
    height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.mobile-clear {
    right: 1.2rem;
}
button.text-btn, button.timer.active {
    border: none;
    border-left: 1px solid #ccc;
    background: #fff;
    border-radius: 0;
    padding: 0;
}
button.text-btn {
    color: #848689;
}
.text-btn[data-v-24b90a56] {
    position: absolute;
    height: 1.5rem;
    line-height: 1.5rem;
    right: 0;
    top: 0.75rem;
    text-align: center;
    padding: 0 0.1rem 0 0.15rem;
    border-left: 1px solid #ccc;
    font-size: 1rem;
}

.getMsg-btn {
    font-size: .14rem;
    width: 1.1rem;
    height: .34rem;
    line-height: .3rem;
    border-radius: .18rem;
    outline: 0;
    top: .08rem;
    right: 0;
    position: absolute;
    padding: 0;
    background-color: #f7f7f7;
    color: silver;
    border: .01rem solid #f7f7f7;
}
.notice {
    font-size: .14rem;
    line-height: .3rem;
    color: #f23030;
    min-height: 3.15rem;
    text-align: left;
}
.btn {
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-top: 0;
}
.btn {
    margin-top: 0.5rem;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    display: block;
    background-color: #efefef;
    border-radius: 1.5rem;
    font-size: 1.5rem;
    color: #fff;
    background-image: -webkit-gradient(linear, left top, right top, from(#fab3b3), color-stop(73%, #ffbcb3), to(#ffcaba));
    background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
    -webkit-box-shadow: 0 0.1rem 20px 0 rgba(255, 62, 62, 0.2);
    box-shadow: 0 0.1rem 20px 0 rgba(255, 62, 62, 0.2);
    text-align: center;
    font-family: PingFangSC-Semibold;
}
.btn-onestep {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #ff2000;
    color: #f10000;
    background: #fff;
    margin-top: 1.1rem;
}
.quick-btn[data-v-24b90a56] {
    color: rgba(0, 0, 0, 0.4);
    font-size: 1rem;
    margin-top: 0.5rem;
    overflow: hidden;
}
.quick-btn .planBLogin {
    float: left;
}
.quick-btn .quickReg {
    float: right;
}
.quick-login {
    margin-top: .88rem;
    border-top: 1px solid rgba(0,0,0,.1);
    font-size: .8rem;
}
.quick-login .txt-otherLogin {
    color: rgba(0, 0, 0, 0.2);
    width: 5.4rem;
    margin: -0.5rem auto 0;
    background: #fff;
    text-align: center;
}
.quick-login .quick-type {
    text-align: center;
    margin: .25rem 0 .12rem;
}
.quick-login .quick-type .icon-qq {
    background-image: url(data:image/png;base64,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);
}
.quick-login .quick-type a{
    display: inline-block;
    width: 3.48rem;
    color: rgba(0, 0, 0, 0.4);
    margin: 0 1.15rem;
    height: 6rem;
    background-size: 100% auto;
    padding-top: 0.53rem;
    line-height: 8rem;
    background-repeat: no-repeat;
}
.quick-login .quick-type .icon-wx {
    background-image: url(data:image/png;base64,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);
}
.quick-login .quick-type[data-v-24b90a56] {
    display: inline-block;
    width: 23.48rem;
    color: rgba(0, 0, 0, 0.4);
    margin: 0 0.15rem;
    background-size: 100% auto;
    padding-top: 1.53rem;
    background-repeat: no-repeat;
}
.policy_tip {
    text-align: center;
    font-size: .8rem;
    color: rgba(0,0,0,.3);
    margin-top: .9rem;
}
a {
    color: #4a90e2;
    text-decoration: none;
}
</style>