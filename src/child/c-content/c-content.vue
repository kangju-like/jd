<template id="temp">
  <!-- vue实例外创建 -->
  <div id="categoryBody" class="category-viewport category-categoryNewUi">
    <div id="rootList" class="jd-category-tab">
      <div style="overflow-y: auto; overflow-y:scroll; height: 574px;" id="category3">
        <ul style="transform: translateY(0px);" id="category2">
          <li  v-for="(item, index) in left" :key="index" v-on:click="cl(index)" v-bind:class="{Red:index==num}">
            <a
              class="J_ping"
              href="javascript:void(0);"
            >{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="jd-category-content">
      <div
        id="branchScroll"
        style=" height: 574px; width: 289px; overflow:auto;"
      
        class="jd-category-content-wrapper"
      >
        <div id="branchList" style="transform: translateY(0px);">
          <div class="jd-category-div cur">
            <a

              class="rank-box J_ping"
     
            >
              <i class="rank-icon"></i>
              <span>排行榜</span>
              <i class="right-arrow"></i>
            </a>
            <h4>{{one_title}}</h4>
            <ul class="jd-category-style-1">
              <li v-for="(item, index) in one_right" :key="index">
                <a
                  class="J_ping"
                
                  id="branch_184"
                  
                >
                  <img
                    :src="item[0]"
                    id="Imglazyload202"
                  />
                  <span>{{item[1]}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="jd-category-div cur">
            <a
              href=""
              class="rank-box J_ping"
              report-eventid="MFilter_RankingList"
              report-eventparam="2006_64754_home"
              report-eventlevel="2"
            >
              <i class="rank-icon"></i>
              <span>排行榜</span>
              <i class="right-arrow"></i>
            </a>
            <h4>{{two_title}}</h4>
            <ul class="jd-category-style-1">
              <li v-for="(item, index) in two_right" :key="index" >
                <a
                  class="J_ping"
                  id="branch_184"
                >
                  <img
                    :src="item[0]"
                    id="Imglazyload202"
                  />
                  <span>{{item[1]}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="category4" class="jd-category-loadfail" style="display: none;">
          <div class="loadfail-content">
            <div class="failing"></div>
            <span>加载失败</span>
            <a href="javascript:void(0);" id="category5" class="btn-loadfail"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import cs from '../../../server/public/class.json'
export default {
  data() {
    return {
        num:"1",
        left:cs.left,
        one_right:cs.right[0].li,
        two_right:cs.right[1].li,
        one_title:cs.right[0].title,
        two_title:cs.right[1].title
    };
  },mounted() {
    var self = this;
  },methods: {
    
    cl(index){
        this.num=index;
    }
  }
};
</script>
<style scoped>
.Red a{
  
  color:red !important;

} 
.jd-category-tab {
    float: left;
    min-width: 76px;
    width: 76px;
    height: auto;
    overflow-y: auto;
    min-height: 100%;
}
.category-categoryNewUi .jd-category-tab {
    width: 86px;
    background: #f8f8f8;
}
.category-categoryNewUi .jd-category-tab ul {
    width: 85px;
    overflow: auto;
}
.category-categoryNewUi .jd-category-tab li.cur {
    background: #fff;
}
.category-categoryNewUi .jd-category-tab li.cur a {
    color: #e93b3d;
}
.category-categoryNewUi .jd-category-tab a {
    color: #333;
    font-size: 14px;
}
.jd-category-tab a {
    display: block;
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-decoration: none;
    font-size: 13px;
    color: #080808;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
li{
    text-align: center;
}
.category-categoryNewUi .jd-category-content {
    background-color: #fff;
}
.jd-category-content {
    height: auto;
    min-height: 100%;
    width: 100%;
    font-size: 12px;
    color: #252525;
    background-color: #f3f5f7;
}
.category-categoryNewUi .jd-category-content .jd-category-content-wrapper {
    margin-left: 86px;
}
.jd-category-content #branchList {
    overflow: hidden;
    padding-bottom: 10px;
}
.jd-category-content .jd-category-div {
    display: none;
    margin: 19px 7px 0;
}
.jd-category-content .jd-category-div.cur {
    display: block;
}
.rank-box {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    box-align: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    float: right;
    height: 14px;
}
.category-categoryNewUi .rank-box .rank-icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFRJREFUSA1jYBjqgJEYD7y0tv2PTZ340cME9TNh00hNsVELCIbm0A8iFoJ+JEIBvmQ89INo6PsAHMn4IomIOMarZOgH0agP8EYwSHLoBxFBLw56BQDOMwwsaZRV+QAAAABJRU5ErkJggg==) no-repeat;
    background-size: 12px 12px;
}
.rank-box span {
    display: block;
    color: #848689;
    font-size: 10px;
    line-height: 10px;
    margin-left: 4px;
    position: relative;
    top: 1px;
}
.category-categoryNewUi .rank-box .right-arrow {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSA3dlDuuwjAQRUnMMthEPptAokSPb08DYiN0dK99eghS8FlI0tOzDJJwB8WSZTxOTCqIFNkZz9xj+9rpdD798bgFZFnWL4ril8Y9z1tHUXTkcm1xnxusxHsY75VlmQA44XJtcRagFQkA/96BsAAhxBKQXAG9BWEBQRBcsPczBjJWwNYua7KsStN0BA/+8S1kDG3u+/48DMO9EjN2awFU1QbSCNAG0hhgg2BsGMfxmXL0hzVZT6RvXLaDyXgMbU35FHMCVCKlQcwUe6Y5AWD2D07UDpXqibrjzqwMUDdAJa4f1zttGd0ZDtDIZEW8qwjlEJ/Cl0SJvXRrAW3EiWb1wCI+q5u5XAq7AogPYOgJifq2kPhBCtS17AogvmkrTnAWoM2MDHWauaxnAfhbLpB0xXvDO3TZFin+He0DdXuUHqDBwt8AAAAASUVORK5CYII=) no-repeat;
    background-size: 12px 12px;
    position: relative;
    top: 1px;
    width: 12px;
    height: 12px;
}
.category-categoryNewUi .jd-category-content h4 {
    font-size: 14px;
    color: #333;
}
.jd-category-div:first-child h4 {
    display: inline-block;
}
.jd-category-content h4 {
    font-size: 12px;
    margin: 0;
    padding: 0;
    line-height: 1em;
    font-weight: 700;
    color: #080808;
}
.jd-category-content .jd-category-style-1 {
    border: 0;
    font-size: 0;
    padding: 7px 10px 0;
    overflow: hidden;
}
.jd-category-content ul {
    margin-top: 9px;
    background-color: #fff;
}
.category-viewport li, .category-viewport ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.jd-category-style-1 li {
    width: 32.8%;
    float: left;
    text-align: center;
}
.category-viewport li, .category-viewport ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.jd-category-style-1 a {
    text-decoration: none;
    color: #252525;
}
.category-categoryNewUi .jd-category-style-1 img {
    width: 70px;
    height: 70px;
}

.jd-category-style-1 img {
    width: 55px;
    height: 55px;
    border: 0;
}
.category-categoryNewUi .jd-category-style-1 span {
    color: #333;
    height: 35px;
    margin-top: 2px;
    -webkit-box-pack: start;
    -moz-box-pack: start;
    -ms-box-pack: start;
    -o-box-pack: start;
}
.jd-category-style-1 span {
    font-size: 12px;
    height: 36px;
    color: #686868;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -ms-line-clamp: 2;
    -o-line-clamp: 2;
    box-orient: vertical;
    -webkit-box-orient: vertical;
    -ms-box-orient: vertical;
    -o-box-orient: vertical;
    word-break: break-all;
    box-align: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-pack: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-box-pack: center;
    -o-box-pack: center;
    z-index: 2;
    position: relative;
}
</style>