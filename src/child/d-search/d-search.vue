<template >
  <!-- vue实例外创建 -->
  <div id="searchWrapper" class="search-land" style="display: block;">
    <div class="mjd-header">
      <div class="m_common_container">
        <div class="m_cc_header_inner">
          <header class="jd-header">
            <div class="jd-header-new-bar">
              <div id="msCancelBtn" class="jd-header-icon-back J_ping" style="display: block;">
               <router-link  :to="{name:names}"> <p></p></router-link>
              </div>
              <div class="jd-header-new-title"></div>
              <div
                id="msShortcutLogin"
                class="jd-header-icon-new-shortcut-text J_ping"
                style="display: none;"
              >
                <span>登录</span>
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
            <div class="jd-header-search-box" id="msSearchBox" style="margin-right: 52px;">
            
              <i id="search-input-left-icon" class="jd-header-icon-fdj"></i>
              <div class="jd-header-search-input">
                <input
                  value
                  maxlength="20"
                  name="keyword"
                  id="msKeyWord"
                  type="text"
                  cleardefault="no"
                  autocomplete="off"
                  placeholder="游戏本i7"
                  class="hilight2"
                />
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
              style="display: block;"
              id="msSearchBtn"
              class="jd-header-icon-search1"
            >
              <span>搜索</span>
            </a>
          </form>
        </div>
      </div>
    </div>
    <div id="msContentWraper" style="display: block;">
      <div id="msHistory" class="recent-search" style="display: none;" hide="1">
        <div class="recent-search-head cf">
          <p>最近搜索</p>
          <i id="msHistoryDel" class="garbage-pic"></i>
        </div>
        <div id="msHistoryTags" class="recent-search-tags"></div>
      </div>
      <div id="msClearToast" class="search-toast" style="display:none;">
        <div id="msClearFloor" class="black-floor"></div>
        <div class="ground-toast">
          <div class="toast-content">确定要清空吗?</div>
          <div class="toast-btn">
            <a class="no" id="msClearCancel">取消</a>
            <a class="sure" id="msClearSure">确定</a>
          </div>
        </div>
      </div>
      <div id="msHotSearch" class="hot-search" style="display: block;">
        <div class="hot-search-head cf">
          <p>热门搜索</p>
          <i id="msHotSearchReflash" class="around-pic" style="display:none;"></i>
          <div id="msHotwordVisible" class="hotword_visible">
            <span>隐藏</span>
            <span>显示</span>
          </div>
        </div>
        <div id="msHotSearchTags" class="hot-search-tags">
          <div class="s_hasHide">已隐藏搜索发现</div>
          <span key="无损播放器" ind="1">
            <a href="javascript:void(0);">
              <i class="hot-search-move hot-search-red">无损播放器</i>
            </a>
          </span>
          <span key="增压花洒喷头" ind="2">
            <a href="javascript:void(0);">
              <i class="hot-search-move hot-search-red">增压花洒喷头</i>
            </a>
          </span>
          <span key="车载收音机" ind="3">
            <a href="javascript:void(0);">
              <i class="hot-search-move hot-search-red">车载收音机</i>
            </a>
          </span>
          <span key="空气炸锅" ind="4">
            <a href="javascript:void(0);">
              <i class="hot-search-move">空气炸锅</i>
            </a>
          </span>
          <span key="养生壶" ind="5">
            <a href="javascript:void(0);">
              <i class="hot-search-move">养生壶</i>
            </a>
          </span>
          <span key="懒人减肥机" ind="6">
            <a href="javascript:void(0);">
              <i class="hot-search-move">懒人减肥机</i>
            </a>
          </span>
          <span key="金士顿内存" ind="7">
            <a href="javascript:void(0);">
              <i class="hot-search-move">金士顿内存</i>
            </a>
          </span>
          <span key="功夫茶杯" ind="8">
            <a href="javascript:void(0);">
              <i class="hot-search-move">功夫茶杯</i>
            </a>
          </span>
          <span key="飞科剃须刀" ind="9">
            <a href="javascript:void(0);">
              <i class="hot-search-move">飞科剃须刀</i>
            </a>
          </span>
          <span key="电动牙刷" ind="10">
            <a href="javascript:void(0);">
              <i class="hot-search-move">电动牙刷</i>
            </a>
          </span>
          <span key="晾衣架" ind="11">
            <a href="javascript:void(0);">
              <i class="hot-search-move">晾衣架</i>
            </a>
          </span>
          <span key="铝合金门窗" ind="12">
            <a href="javascript:void(0);">
              <i class="hot-search-move">铝合金门窗</i>
            </a>
          </span>
        </div>
      </div>
      <ul id="msKeys" class="association-normal" style="display: none;"></ul>
    </div>
    <div id="msHeaderMask" class="header-mask" style="display:none;"></div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import tx from "../../plug/tx.js";
export default {
  data() {
    return { names: "默认值" };
  },
  created() {  //实例未完全创建出来执行 
 
      // this.names= this.$store.state.sname;
      // console.log(this.names,this.$store.state.sname)
      // console.log(this);
      this.names=this.$store.getters.getSname;
      console.log(this.$store.getters.getSname);
      
    //  console.log(this.nazmes);
     
  },
  computed: {
    // 提供state的信息
    
},
  mounted () {
    //  var self= this;
    
  }
};
</script>
<style lang="less">
#msCancelBtn p{
  margin: 12px 0 0 10px;
    width: 1.266667rem;
    height: 1.266667rem;
    display: block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==) no-repeat;
    background-size: 100% 100%;
}

.mjd-header {
  z-index: 969;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
}
.mjd-header .m_common_container {
  position: relative;
}
.mjd-header .m_common_container .m_cc_header_inner {
  min-height: 44px;
}
body {
  margin: 0 auto;
  min-width: 320px;
  max-width: 540px;
  background: #fff;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  -webkit-text-size-adjust: 100% !important;
  padding-bottom: env(safe-area-inset-bottom);
}
.mjd-header .m_common_container .m_cc_header_inner .jd-header {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 0.586667rem;
  font-family: PingHei, Lucida Grande, Lucida Sans Unicode, STHeiti, Helvetica,
    Arial, Verdana, "sans-serif";
  font-size: 0.213333rem;
  text-decoration: none;
  color: #252525;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  min-height: 0.586667rem;
  background: #fff;
}
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-back {
  z-index: 120;
  position: absolute;
  width: 0.533333rem;
  height: 0.586667rem;
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
.mjd-header .m_common_container .m-common-header-search {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
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
.mjd-header
  .m_common_container
  .m_cc_header_inner
  .jd-header
  .jd-header-new-bar
  .jd-header-icon-back
  span {
  margin: 12px 0 0 10px;
  width: 1.266667rem;
  height: 1.266667rem;
  display: block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: 100% 100%;
}
.search-land .hot-search {
  margin-bottom: 0;
  padding-left: 13px;
  margin-top: 15px;
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
  left: 11.5rerm;
  float: left;
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
  background: #f7f7f7;
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
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-icon-search1 {
  position: absolute;
  right: 0;
  top: 0;
  color: #81838e;
  font-size: 14px;
  height: 44px;
  width: 55px;
  text-decoration: none;
  display: block;
}
.mjd-header
  .m_common_container
  .m-common-header-search
  .jd-header-search-form
  .jd-header-icon-search1
  span {
  position: static;
  padding: 6px;
  box-sizing: border-box;
  background-color: #e93b3d;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 44px;
}
.search-land .hot-search .hot-search-head {
  padding: 0 15px 11px 0;
  padding-top: 3px;
}
.search-land .hot-search .hot-search-head p {
  font-size: 15px;
  line-height: 15px;
  color: #232326;
  float: left;
  width: 100px;
  padding-left: 1px;
}
.search-land .hot-search .hot-search-head .hotword_visible {
  float: right;
  color: #999;
  font-size: 15px;
  line-height: 15px;
}
.search-land .hot-search .hot-search-head .hotword_visible span:first-child {
  display: inline;
}

.search-land .hot-search .hot-search-head .hotword_visible span {
  display: none;
}
.search-land .cf:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.search-land .hot-search .hot-search-tags {
  padding-right: 2px;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
}
.search-land .hot-search .hot-search-tags .s_hasHide {
  display: none;
  height: 30px;
  margin: 29px auto 40px;
  line-height: 30px;
  text-align: center;
  color: #999;
}
.search-land .hot-search .hot-search-tags span {
  display: block;
  max-width: 100%;
  overflow: hidden;
  padding-right: 10px;
  padding-bottom: 10px;
  float: left;
}
.search-land .hot-search .hot-search-tags a {
  height: 23px;
  line-height: 24px;
  border-radius: 3px;
  display: block;
  width: 100%;
  color: #686868;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: #f0f2f5;
  padding-left: 13px;
  padding-right: 13px;
  overflow: hidden;
  box-sizing: border-box;
}
.search-land .hot-search .hot-search-tags .hot-search-move.hot-search-red {
  color: #e93b3d;
}
.search-land .hot-search .hot-search-tags .hot-search-move {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
em,
i {
  font-style: normal;
}
</style>