<template>
  <!-- vue实例外创建 -->
  <div style="position: fixed;
    top: 0;
    left: 0;width:100%;
    z-index:100;"
    :class="Red" >
    <div class="mjd-header"   id="hd">
      <div class="m_common_container">
        <div class="m_cc_header_inner">
          <header class="jd-header">
            <div class="jd-header-new-bar">
              <div id="msCancelBtn" class="jd-header-icon-back J_ping" style="display: block;">
                <p></p>
              </div>
              <div class="jd-header-new-title"></div>
              <div
                id="msShortcutLogin"
                class="jd-header-icon-new-shortcut-text J_ping"
                style="display: block;"
              >
              <router-link  :to="{ name:'dl'
      }">
                <p>登录</p></router-link>
              </div>
              <div
                id="msShortcutMenu"
                class="jd-header-icon-new-shortcut J_ping"
                style="display:none;"
              >
                <span></span>
              </div>
            </div>
          </header>
        </div>
        <div class="m-common-header-search">
          <form action="/search/search.action" class="jd-header-search-form">
            <div class="jd-header-search-box" id="msSearchBox" style="margin-right: 32px;">
              <i id="search-input-left-jd" class="jd-header-icon-jd"></i>
              <i id="search-input-left-icon" class="jd-header-icon-fdj"></i>
              <div class="jd-header-search-input">
                <router-link  :to="{name:'search'}">
                <input
                
                  type="text"
                  
                  placeholder="            苹果电脑"
                  class="hilight2"
                  v-on:click="searchTX"
                />
                </router-link>
                <input name="catelogyList" type="text" value style="display:none;" />
                <div
                  class="head-input-icon J_ping"
                  id="msSearchTab"
                  report-eventid="MSearch_SearchTab"
                  style="display:none;"
                ></div>
              </div>
              <a
                href="javascript:void(0);"
                class="jd-header-icon-close"
                id="msSearchClearBtn"
                style="display:none;"
              ></a>
            </div>
            <a
              href="javascript:void(0)"
              style="display: none;"
              id="msSearchBtn"
              class="jd-header-icon-search1"
            >
              <span>搜索</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
// import tx from '../../plug/tx.js'
export default {
  data() {
    return {
      Red:'res',
      
    }
  },
  components:{
      
 
 
   
   
        
      
  },
  created() {

  },
   mounted () {
   window.addEventListener('scroll',this.handleScroll)

  
  

},
   methods: {
     searchTX(){
       
          this.$store.commit('setSname', 'home')
        
     },
    
   handleScroll(){
     
   console.log(window.scrollY)
    window.scrollY>5?this.Red="Red" :this.Red=""
    
} 


 },

}
</script>
<style scoped lang="css">
#hd{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.search-land.main-page .mjd-header .m_common_container .m-common-header-search .jd-header-search-form .jd-header-search-box .jd-header-search-input {
    padding-left: 68px;
}
.Red{
  background: rgb(243, 41, 6);
}
.mjd-header {
  z-index: 969;
  width: 100%;
  position: fixed !important;
  left: 0;
  top: 0;
  background-color:rgba(0, 0, 0, 0) !important;
  margin: 0 auto;
  position: relative !important;
}
.mjd-header .m_common_container {
  position: relative !important;
}
.mjd-header .m_common_container .m_cc_header_inner {
  min-height: 44px !important;
}
.mjd-header .m_common_container .m_cc_header_inner .jd-header {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 44px;
  font-family: PingHei, Lucida Grande, Lucida Sans Unicode, STHeiti, Helvetica,
    Arial, Verdana, "sans-serif";
  font-size: 16px;
  text-decoration: none;
  color: #252525;
}
.skin_transparent
  .mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar {
  border-bottom: none;
  background: transparent;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  min-height: 44px;
  background: rgba(0, 0, 0, 0);
}
.search-land.main-page
  .mjd-header
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-back {
  z-index: 120;
  position: absolute;
  width: 40px;
  height: 44px;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-back {
  z-index: 120;
  position: absolute;
  width: 40px;
  height: 44px;
}
.search-land.main-page
  .mjd-header
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-back
  span {
  margin: 14px 0 0 15px;
  width: 20px;
  height: 18px;
  display: block;
  background: url(data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAHlJREFUWAnt2LEJwDAMRFE5c2ShLOKhsp69h3ISeAI1CnyBiJvA8dwcHu7+mNmrvbWdZivMHAq4dOgW7kDt65y6fiPg1AZnt8kr7haKPAgggAACfxOIskCbKdwabaaAlw0rmhaDAAIIIIBAQYA2U8CLX2kzFcB8m/kAgGUmQShl8pcAAAAASUVORK5CYII=/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR…CbKdwabaaAlw0rmhaDAAIIIIBAQYA2U8CLX2kzFcB8m/kAgGUmQShl8pcAAAAASUVORK5CYII=)
    no-repeat;
  background-size: 100% 100%;
}
.mjd-header .m_common_container .m-common-header-search .jd-header-search-form .jd-header-search-box .jd-header-search-input{
  background: #fff !important;
}
.mjd-header .m_common_container .m-common-header-search .jd-header-search-form .jd-header-search-box .jd-header-search-input input {
    border: 0;
    background:#fff;
    font-size: 12px;
    color: #232326;
    padding-left: 5px;
    width: 19em;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    height: auto;
    margin: 0 0 0 5px;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    line-height: 30px;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-new-title {
  margin: 0 70px;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-new-shortcut-text {
  z-index: 120;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 44px;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-new-shortcut-text
  span {
  display: inline-block;
  margin: 10px 0;
  color: rgba(0, 0, 0, 0);
  font-size: 14px;
}
.mjd-header .m_common_container .m_cc_header_inner .jd-header .jd-header-new-bar .jd-header-icon-new-shortcut-text p {
    display: inline-block;
    margin: 12px 0;
    margin-left: 4px;
    color: #fff;
    font-size: 14px;
}
#msCancelBtn p {
    margin: 14px 0 0 10px;
    width: 20px;
    height: 18px;
    display: block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAHlJREFUWAnt2LEJwDAMRFE5c2ShLOKhsp69h3ISeAI1CnyBiJvA8dwcHu7+mNmrvbWdZivMHAq4dOgW7kDt65y6fiPg1AZnt8kr7haKPAgggAACfxOIskCbKdwabaaAlw0rmhaDAAIIIIBAQYA2U8CLX2kzFcB8m/kAgGUmQShl8pcAAAAASUVORK5CYII=) no-repeat;
    background-size: 100% 100%;
}
.search-land.main-page2
  .mjd-header
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-new-shortcut {
  z-index: 120;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 44px;
}
.mjd-header .m_common_container .m-common-header-search {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
}
.search-land.main-page2
  .mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form {
  margin: 0 20px 0 50px;
}
.mjd-header .m_common_container .m-common-header-search .jd-header-search-form {
  display: block;
  overflow: hidden;
  margin: 0 10px 0 40px;
  padding: 0;
  height: 44px;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box {
  margin-right: 52px;
  margin-top: 7px;
  height: 30px;
  position: relative;
}
.mjd-header .m_common_container .m-common-header-search .jd-header-search-form .jd-header-search-box .jd-header-icon-jd {
    display: block !important;
    width: 20px;
    height: 15px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR…EjDN9NZ73CoE5BTzNTGi+ruCa0u6u8ntG6cLhs7+ds+1b5D7N0Tl8rtx1wAAAAAElFTkSuQmCC) no-repeat;
    background-size: 20px 15px;
    margin: 8px 8px 0 15px;
    position: relative;
    z-index: 1;
    float: left;
}
.mjd-header .m_common_container .m-common-header-search .jd-header-search-form .jd-header-search-box .jd-header-icon-jd::after {
    content: "";
    position: absolute;
    border-right: 1px solid #ddd;
    top: 0;
    left: 26px;
    height: 16px;
}
.mjd-header .m_common_container .m-common-header-search .jd-header-search-form .jd-header-search-box .jd-header-icon-fdj {
    display: block;
    width: 18px;
    height: 15px;
    background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline) no-repeat;
    background-position: -80px 0;
    background-size: 200px;
    margin-left: 10px;
    margin: 8px 0 0 15px;
    position: relative;
    z-index: 1;
    float: left;
}
.search-land.main-page2
  .mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-jd {
  display: block;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-jd {
  display: none;
  width: 20px;
  height: 15px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAA/tJREFUWAnNmF9oU1ccx8/v5iZXov2nTVOloowJDjfYk4w1SW2xVdDik08iYw8Dqw9j4tsYFMZe3HAMBg593B5mVQSLD0abalL/FcUHNwTFvsjU/HFNW21N0tzfvifNiTf3pqajtc2B8Pv9vvec3/3c8+fec0KiSkm0hyIsuNNazaD6tY0jl8alFm8P/SEEH7Belz5BhJkSRBNw0gjjJOgesxh1Gfqd5kjkH3ubSrFeSVwKDVBgFPWCuR52I36f4EF3ytz5TE4kAsFrgumkb9vWC3TqVE7qlYpWSVwODT25A8BnEn8/fJwKhbrmu+eKAVqANpl5vhpvD57g/ftdFr3gvpchdmmugxjiWZPZTWw2YKybTKKtxGI7eu1DO0RxOnyTev5iFa4dtl5/L4DrWn0DdPZs1noj5SdCoS2c5z4i+oqZ1yhdWpNFHxbdmP9G9CelL/sQt0Sjj/03YkfZo3+KZXRHgby1/MN4V9cmFS87oLqxPxJ50rK+tROvnrtKK1pPLjv7ndJWDFACYBrMkNfYh+F+pYCK9otkd/cG6a8ooATwXbnyjEj8Jn1VMDd1nsnukvGKA0oIN3tOSmstLMxuGdcEYOPI1TEM81MrIDGFagZwDozLVzSJVu7v12qiB+cAKWHtQcxD11Qs1lRDgKKwO7JCZvN5Xy0BOr5qJj6XtQPItM7ae9J3C5GqHUAy26yAWNWzjcPDEwsBdGyBrImWwi9ss1h8bs2FHc5TQHJVQCbhsTaUfoM3V3GnYq+30DjxIvUZgOTOu1SwRRuWQVVA1PGXWkmH6A2Fw6/LtMUGPHvMngKAQ1J7JyD39nqJeXNZY+Z4WbzIIBns7MBGdp8tzbRhuC9L7Z2AyX8n9qLr5eGnVPBhv1UKFumkAzs/MDl/zn4PjcSv9UNDL2X6eQFlYxwVf3YyaGGn9v+VZKCjNyMyt3Hqa7a2Rm9MGobnuNIcL8epnp6Wmek3X2Y58y2erE5VnLMU93mNgXJt4VE6sKcpJ17txk7liMlmu70lVm2eNHFQ9Z68rieDoR9NU6zHim7DUbsNcJvld9DeWMaaxv0LWSDJ5/Hj8UAwj7nlxqJqwBGzEVPjowxPbqmUV2mof8QXjV5UsbS6aXJhBSHJXCk5xVgZEqd9sVjZxlJdsls84NdSK6Qs5psvbaEtUUoQH/LFouftueadg6oi5kQOXfc9zg99SlsqK78W6Nk/Vxvuj/2xmANO3scxB9XNASb/VxnQNfHL2uj1B0pfEktiDC+H3zWPfrrafzQ6IG5jMPDipUlAjeOp/sJ/Jvebm+pGaXBwuhqQptEjDN9NZ73CoE5BTzNTGi+ruCa0u6u8ntG6cLhs7+ds+1b5D7N0Tl8rtx1wAAAAAElFTkSuQmCC)
    no-repeat;
  background-size: 20px 15px;
  margin: 8px 8px 0 15px;
  position: relative;
  z-index: 1;
  float: left;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-jd::after {
  content: "";
  position: absolute;
  border-right: 1px solid #ddd;
  top: 0;
  left: 26px;
  height: 16px;
}
.search-land.main-page2
  .mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-fdj {
  margin-left: 5px;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-icon-fdj {
  display: block;
  width: 18px;
  height: 15px;
  background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline)
    no-repeat;
  background-position: -80px 0;
  background-size: 200px;
  margin-left: 10px;
  margin: 8px 0 0 15px;
  position: relative;
  z-index: 1;
  float: left;
}
.search-land.main-page2
  .mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-search-input {
  padding-left: 68px;
}

.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-search-input {
  display: inline-block;
  width: 100%;
  border: none;
  border-radius: 15px;
  height: 30px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
  font-size: 12px;
  -webkit-box-align: center;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 35px;
  padding-right: 10px;
  box-sizing: border-box;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-search-box
  .jd-header-search-input
  input {
  border: 0;
  background: 0 0;
  font-size: 12px;
  color: #232326;
  padding-left: 5px;
  width: 19em;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  height: auto;
  margin: 0 0 0 5px;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  line-height: 30px;
}
</style>