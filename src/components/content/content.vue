<template id="temp">
  <!-- vue实例外创建 -->
  <div id="content" style>
    <a href="javascript:void(0);" style="width: 100%; display: block; height: 6.3rem;">
      <img
        src="http://m.360buyimg.com/mobilecms/s750x200_jfs/t1/60590/23/13847/98086/5db2bc0aE66238ad2/43cd9db750a9c407.jpg!q70.dpg.webp"
        class="opa1 ll_fadeIn"
        style="max-width: 100%; max-height: 100%; opacity: 1;"
      />
    </a>
    <div class="floor seckill">
      <div class="floor-the-container">
        <div class="floor-container">
          <div class="sec_kill_floor">
            <div class="title_wrap">
              <a class="seckill-left-link j_more_sec_link" href="javascript:void(0);">
                <!--strong class="seckill-tit-txt">京东秒杀</strong-->
                <div class="seckill-tit-img"></div>
                <strong class="seckill-nth j_sec_order" style="font-color:#000000">18点场</strong>
                <div id="seckill_time" class="seckill-timer">
                  <div class="seckill-time j_sk_h">00</div>
                  <span class="seckill-time-separator">:</span>
                  <div class="seckill-time j_sk_m">25</div>
                  <span class="seckill-time-separator">:</span>
                  <div class="seckill-time j_sk_s">06</div>
                </div>
                <span id="seckill_loading"></span>
              </a>
              <a class="seckill-more-link j_more_sec_link" href="javascript:void(0);">
                更多秒杀
                <i class="seckill-more-icon"></i>
              </a>
            </div>
            <div class="floor-container seckill-slider j_sk_wrapper" style="overflow-x: scroll">
              <ul
                class="seckill-new-list j_sk_list"
                style="transition: all 0.3s ease 0s; transform: translate3d(0px, 0px, 0px); width: 890.011px;"
              >
                <li
                  v-for="(item, index) in tive"
                  :key="index"
                  class="seckill-new-item j_sk_li"
                  style="width: 84.3011px;"
                >
                  <div class="seckill-item-img">
                    <a href="javascript:void(0);" class="seckill-new-link">
                      <img :src="item[0]" class="seckill-photo" />
                    </a>
                  </div>
                  <div class="seckill-item-price">
                    <span class="seckill-new-price">
                      <em>¥</em>
                      <span class="j_init_price" v-text="item[1]"></span>
                    </span>
                    <span class="seckill-original-price">
                      <em>¥</em>
                      <span class="j_init_price" v-text="item[2]"></span>
                      <hr />
                    </span>
                  </div>
                </li>

                <li class="seckill-all-item">
                  <a class="j_more_sec_link j_scroll_more_sec_link" href="javascript:void(0);">
                    <div class="seckill-all">
                      <i class="show-all-icon"></i>
                      <span class="show-all-title">查看全部</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="floor fl">
      <div class="floor-the-container">
        <div class="floor-graphic-item">
          <div type="000" class="graphic-separation graphic-col02-bg">
            <a href="javascript:void(0);">
              <span
                class="j_event_param"
                style="display: none;"
              >5707_0_CMSSH376425_0_895869_0_1_1____________{"position":"24#1#1","directid":"67108992#8192--","style":"06006","sourceid":"376425","moduleid":"376425","sourcetype":"0","floorid":"5707"}</span>
              <div class="show-img">
                <img
                  src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"
                  class="opa1"
                />
              </div>
            </a>
          </div>
          <div type="000" class="graphic-separation graphic-col02-bg">
            <a
              data-event_id="MHome_BFloor"
              data-event_level="1"
              data-event_param="j_event_param"
              href="javascript:void(0);"
              jump-href="//pro.m.jd.com/mall/active/4HinegyNut8exydNTNHQzZhmKpsF/index.html"
            >
              <div class="show-img">
                <img
                  src="http://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
                  class="opa1"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 三张 -->
    <div class="floor ms">
      <div class="floor-the-container">
        <div class="floor-container floor-container-banner bdr-bottom">
          <div class="floor-graphic-item">
            <div class="graphic-separation graphic-col03-sm">
              <a href="javascript:void(0);">
                <div class="show-img">
                  <img
                    src="http://m.360buyimg.com/mobilecms/s250x200_jfs/t1/57519/33/14152/101474/5dafb9feEaa466584/ac595b85ed721ee7.jpg!q70.jpg.dpg"
                    class="opa1"
                  />
                </div>
              </a>
            </div>
            <div class="graphic-separation graphic-col03-sm">
              <a href="javascript:void(0);">
                <div class="show-img">
                  <img
                    src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/78090/15/13715/26015/5daebff0E8e27876f/6c125a322a6d7339.png!q70.jpg.dpg"
                    class="opa1"
                  />
                </div>
              </a>
            </div>
            <div class="graphic-separation graphic-col03-sm">
              <a href="javascript:void(0);">
                <div class="show-img">
                  <img
                    src="http://m.360buyimg.com/mobilecms/s250x200_jfs/t1/62937/17/13721/57534/5daefa78E15f0b5e3/f6fb38e18f31da08.jpg!q70.jpg.dpg"
                    class="opa1"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 走心推荐 -->
    <div class="floor floor-7319 j_expo expo_loaded">
      <div class="flsPit fls-tit">
        <div class="floor-title floor-tit-img" style="background-color: ;" data-floorname="走心推荐">
          <span
            class="tit-img"
            style="display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;position: relative;"
          >
            <img
              onerror="__reloadResource(this)"
              class="ll_fadeIn"
              src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/100775/27/591/13568/5db00e38E4ea56d6d/6de6393a946e92c1.png!q70.jpg.dpg"
              loaded="1"
              style="opacity: 1;"
            />
          </span>
        </div>
      </div>

      <div class="floor-the-container-outer floor-7319">
        <div class="floor-the-container">
          <div class="floor-container bdr-bottom fls06056 style1">
            <!-- 换一换按钮 -->
            <div class="floor-graphic-item">
              <!-- 上面主标题，中间sku，下面副标题 -->
              <div class="fls06056_ui1">
                <div class="fls06056_wrapper">
                  <section class="fls06056_switch-item fls06056_batch-wrapper">
                    <div
                      class="graphic-separation graphic-col04-bg fliper anim_back j-floor-item"
                      style="border-radius: .5rem;overflow: hidden;background-color: transparent;"
                    >
                      <a
                        class="floor-item-link"
                        style="position: relative;"
                        data-event_id="MHome_BFloor"
                        data-event_level="1"
                        data-event_param="j_event_param"
                        href="javascript:void(0);"
                        jump-href="//h5.m.jd.com/babelDiy/Zeus/2aYUHWpK7cM622ofySt3fn5ziGR4/index.html?PreSale=16236483&amp;innerLink=%5B%7B%22AdvGroupId%22%3A%2203803811%22%2C%22Way%22%3A%225%22%2C%22skuId%22%3A%2259542928337%22%7D%5D"
                      >
                        <div class="real-show style-1">
                          <div class="good-img-wrap poker border-radus style-1">
                            <img
                              class="fls06056_ui1-sku-img ll_fadeIn"
                              src="http://m.360buyimg.com/n1/s240x240_jfs/t1/57889/11/14222/124932/5db01ca1E07ee5670/81ed3304c7729dbb.jpg!q70.jpg.dpg"
                              style="opacity: 1;"
                            />
                            <img
                              class="fls06056_ui1-bg ll_fadeIn"
                              src="//m.360buyimg.com/mobilecms/s240x174_jfs/t1/82976/35/13328/33326/5da85120Ed3cc293d/ba2bc429acbd4d62.png!q70.jpg.dpg"
                              style="opacity: 1;"
                            />
                          </div>
                          <div class="graphic-text">
                            <p
                              class="graphic-tit j_linear_color style-1"
                              style="color: #ffffff;"
                            >手机榜</p>
                            <p class="graphic-wz style-1" style="color: #ffffff;">热卖尖货</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      class="graphic-separation graphic-col04-bg fliper anim_back j-floor-item"
                      style="border-radius: .5rem;overflow: hidden;background-color: transparent;"
                      img_type="1"
                    >
                      <a
                        class="floor-item-link"
                        style="position: relative;"
                        data-event_id="MHome_BFloor"
                        data-event_level="1"
                        data-event_param="j_event_param"
                        href="javascript:void(0);"
                        jump-href="//h5.m.jd.com/babelDiy/Zeus/2aYUHWpK7cM622ofySt3fn5ziGR4/index.html?PreSale=16246441&amp;innerLink=%5B%7B%22AdvGroupId%22%3A%2203803811%22%2C%22Way%22%3A%225%22%2C%22skuId%22%3A%2238652614477%22%7D%5D"
                      >
                        <span
                          class="j_event_param"
                          style="display: none;"
                        >7319_0_CMSSH384570_0__0_1_1_________30_16246441#0_1#6043820fa48b746bcf2cb3ddab20a30f16a39b3-100-621186#16262716_{"position":"28#1#2","style":"06056","sourceid":"16246441","modbiinfo":"1#6043820fa48b746bcf2cb3ddab20a30f16a39b3-100-621186#16262716","moduleid":"384570","sourcetype":"30","floorid":"7319"}</span>
                        <div class="real-show style-1">
                          <div class="good-img-wrap poker border-radus style-1">
                            <img
                              class="fls06056_ui1-sku-img ll_fadeIn"
                              onerror="__reloadResource(this)"
                              src="//m.360buyimg.com/n1/s240x240_jfs/t3319/142/2042490082/348754/faa05d56/583cf2a4Nfaa91814.jpg!q70.jpg.dpg"
                              loaded="1"
                              style="opacity: 1;"
                            />
                            <img
                              class="fls06056_ui1-bg ll_fadeIn"
                              onerror="__reloadResource(this)"
                              src="//m.360buyimg.com/mobilecms/s240x174_jfs/t1/68914/37/13111/38375/5da85135Ea88bb41d/9f9983b690f33d4e.png!q70.jpg.dpg"
                              loaded="1"
                              style="opacity: 1;"
                            />
                          </div>
                          <div class="graphic-text">
                            <p
                              class="graphic-tit j_linear_color style-1"
                              style="color: #ffffff;"
                            >时令水果榜</p>
                            <p class="graphic-wz style-1" style="color: #ffffff;">预售爆款</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      class="graphic-separation graphic-col04-bg fliper anim_back j-floor-item"
                      style="border-radius: .5rem;overflow: hidden;background-color: transparent;"
                      img_type="1"
                    >
                      <a
                        class="floor-item-link"
                        style="position: relative;"
                        data-event_id="MHome_BFloor"
                        data-event_level="1"
                        data-event_param="j_event_param"
                        href="javascript:void(0);"
                        jump-href="//h5.m.jd.com/active/yard-channel/index.html?themeId=24851&amp;babelChannel=15709674&amp;innerLink=%5B%7B%22matId%22%3A%221542939069%22%7D%5D&amp;themeStyle=0"
                      >
                        <span
                          class="j_event_param"
                          style="display: none;"
                        >7319_0_CMSSH384154_0__0_1_1_________24_24851#0_1#9bb3e83282f61ffdab70f607afef45b08600ae0b-100-619193#15709674_{"position":"28#1#3","style":"06056","sourceid":"24851","modbiinfo":"1#9bb3e83282f61ffdab70f607afef45b08600ae0b-100-619193#15709674","moduleid":"384154","sourcetype":"24","floorid":"7319"}</span>
                        <div class="real-show style-1">
                          <div class="good-img-wrap poker border-radus style-1">
                            <img
                              class="fls06056_ui1-sku-img ll_fadeIn"
                              onerror="__reloadResource(this)"
                              src="//m.360buyimg.com/mobilecms/s240x240_jfs/t1/47836/26/5040/460105/5d2c4df8E575af77d/3fc2512cfed3f197.jpg!q70.jpg.dpg"
                              loaded="1"
                              style="opacity: 1;"
                            />
                            <img
                              class="fls06056_ui1-bg ll_fadeIn"
                              onerror="__reloadResource(this)"
                              src="//m.360buyimg.com/mobilecms/s240x174_jfs/t1/83595/27/13081/33511/5da5aac2Eaebaf0d4/ae2e0996fea96d41.png!q70.jpg.dpg"
                              loaded="1"
                              style="opacity: 1;"
                            />
                          </div>
                          <div class="graphic-text">
                            <p
                              class="graphic-tit j_linear_color style-1"
                              style="color: #ffffff;"
                            >中小学生</p>
                            <p class="graphic-wz style-1" style="color: #ffffff;">无忧成长</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      class="graphic-separation graphic-col04-bg fliper anim_back j-floor-item"
                      style="border-radius: .5rem;overflow: hidden;background-color: transparent;"
                      img_type="1"
                    >
                      <a
                        class="floor-item-link"
                        style="position: relative;"
                        data-event_id="MHome_BFloor"
                        data-event_level="1"
                        data-event_param="j_event_param"
                        href="javascript:void(0);"
                        jump-href="//h5.m.jd.com/active/yard-channel/index.html?themeId=27190&amp;babelChannel=15712927&amp;innerLink=%5B%7B%22matId%22%3A%22753768%22%7D%5D&amp;themeStyle=0"
                      >
                        <span
                          class="j_event_param"
                          style="display: none;"
                        >7319_0_CMSSH384155_0__0_1_1_________24_27190#0_1#9bb3e83282f61ffdab70f607afef45b08600ae0b-100-619193#15712927_{"position":"28#1#4","style":"06056","sourceid":"27190","modbiinfo":"1#9bb3e83282f61ffdab70f607afef45b08600ae0b-100-619193#15712927","moduleid":"384155","sourcetype":"24","floorid":"7319"}</span>
                        <div class="real-show style-1">
                          <div class="good-img-wrap poker border-radus style-1">
                            <img
                              class="fls06056_ui1-sku-img ll_fadeIn"
                              onerror="__reloadResource(this)"
                              src="//m.360buyimg.com/mobilecms/s240x240_jfs/t2059/68/1227274244/153917/6aa87a25/5689ceedNe2dccc93.jpg!q70.jpg.dpg"
                              loaded="1"
                              style="opacity: 1;"
                            />
                            <img
                              class="fls06056_ui1-bg ll_fadeIn"
                              onerror="__reloadResource(this)"
                              src="//m.360buyimg.com/mobilecms/s240x174_jfs/t1/54543/38/13625/32191/5da5aaf2E6871d0bc/79795888ea3bcb0a.png!q70.jpg.dpg"
                              loaded="1"
                              style="opacity: 1;"
                            />
                          </div>
                          <div class="graphic-text">
                            <p
                              class="graphic-tit j_linear_color style-1"
                              style="color: #ffffff;"
                            >畅享音乐</p>
                            <p class="graphic-wz style-1" style="color: #ffffff;">轻便好音质</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <!-- floor.content.subFloors -->
        </div>
      </div>
    </div>
    <!-- 精选会场 -->
    <div class="floor floor-7304 j_expo expo_loaded">
      <div class="flsPit fls-tit">
        <div class="floor-title floor-tit-img" style="background-color: ;" data-floorname="精选会场">
          <span
            class="tit-img"
            style="display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;position: relative;"
          >
            <img
              onerror="__reloadResource(this)"
              class="ll_fadeIn"
              src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/65073/34/13606/10548/5db00ee2E5a407271/1835dd30369615e0.png!q70.jpg.dpg"
              loaded="1"
              style="opacity: 1;"
            />
          </span>
        </div>
      </div>

      <div class="floor-the-container-outer floor-7304">
        <div class="floor-the-container">
          <div
            class="floor-container bdr-bottom fls06056 style2"
            data-animationtype="1"
            data-ui="2"
          >
            <!-- 换一换按钮 -->
            <div class="floor-graphic-item">
              <!-- 第一行：sku，第二行：副标题，第三行：主标题 -->
              <div class="fls06056_ui0">
                <div class="fls06056_wrapper">
                  <ul class="fls06056_switch-item floor-items" style="margin: 0">
                    <li
                      v-for="(item, index) in floor1"
                      :key="index"
                      class="floor-item fliper anim_back j-floor-item"
                      style="text-align:center"
                    >
                      <a
                        class="floor-item-link"
                        style="position: relative;"
                        href="javascript:void(0);"
                      >
                        <img
                          class="fls06056_ui0-bg ll_fadeIn"
                          alt=" "
                          style="position: absolute; width: 100%; height: 100%; opacity: 1;"
                          onerror="__reloadResource(this)"
                          :src="item[0]"
                          loaded="1"
                        />

                        <div class="good-img-wrap poker">
                          <img
                            class="good-img poker_front ll_fadeIn"
                            onerror="__reloadResource(this)"
                            style="opacity: 1;"
                            :src="item[1]"
                            loaded="1"
                          />
                        </div>
                        <span
                          class="fls06056_ui0-subtitle"
                          style="color: #ffffff"
                        >{{item[2]}}</span>
                        <strong class="fls06056_ui0-title" style="color: #ffffff">{{item[3]}}</strong>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            class="floor-container bdr-bottom fls06056 style2"
            data-animationtype="1"
            data-ui="2"
          >
            <!-- 换一换按钮 -->
            <div class="floor-graphic-item">
              <!-- 第一行：sku，第二行：副标题，第三行：主标题 -->
              <div class="fls06056_ui0">
                <div class="fls06056_wrapper">
                  <ul class="fls06056_switch-item floor-items" style="margin: 0">
                    <li
                      v-for="(item, index) in floor2"
                      :key="index"
                      class="floor-item fliper anim_back j-floor-item"
                      style="text-align:center"
                    >
                      <a
                        class="floor-item-link"
                        style="position: relative;"
                        href="javascript:void(0);"
                        jump-href="//prodev.m.jd.com/mall/active/nKxVyPnuLwAsQSTfidZ9z4RKVZy/index.html"
                      >
                        <img
                          class="fls06056_ui0-bg ll_fadeIn"
                          alt=" "
                          style="position: absolute; width: 100%; height: 100%; opacity: 1;"
                          onerror="__reloadResource(this)"
                          :src="item[0]"
                          loaded="1"
                        />
                        <span
                          class="j_event_param"
                          style="display: none;"
                        >7304_0_CMSSH383778_0_33365_0_1_1___5070806#1$4691332#2__1#ff00fd1f23f4ab15e450a6c58521da800e9187b6-100-710005#16521507#null_______{"position":"29#2#1","picbiinfo":"1#ff00fd1f23f4ab15e450a6c58521da800e9187b6-100-710005#16521507#null","entryinfo":"5070806#1$4691332#2","style":"06056","sourceid":"33365","modbiinfo":"1#b7466be74ae0f689d99623da7ded8b76e6a9c86a-100-619223#16167267#N","moduleid":"383778","sourcetype":"18","floorid":"7304"}</span>
                        <div class="good-img-wrap poker">
                          <img
                            class="good-img poker_front ll_fadeIn"
                            onerror="__reloadResource(this)"
                            style="opacity: 1;"
                            :src="item[1]"
                            loaded="1"
                          />
                          <img
                            class="good-img poker_back ll_fadeIn"
                            onerror="__reloadResource(this)"
                            style
                            src
                            loaded="1"
                          />
                        </div>
                        <span
                          class="fls06056_ui0-subtitle"
                          style="color: #ffffff"
                        >{{item[2]}}</span>
                        <strong class="fls06056_ui0-title" style="color: #ffffff">{{item[3]}}</strong>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- floor.content.subFloors -->
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import activity from "../../../server/public/activity.json";
import floor from "../../../server/public/floor1.json";
export default {
  data() {
    return {
      tive: activity,
      floor1: floor[0],
      floor2: floor[1]
    };
  },methods: {
    
  },mounted() {
    console.log(this.floor1,this.floor2)
  },
};
</script>
<style lang="less" scoped>
#content {
  background: #4727ea;
  text-align: center;

}
.fls06056_ui0-subtitle{font-size: 0.5rem;
    margin-top: 1.15rem;
    z-index: 20;}
    
.opa1 {
  width: 100%;
  height: 100%;
}
.floor.seckill {
  background-color: #4727ea;
}
.fl {
  height: 8rem;
}
.flsPit.fls-tit {
  height: 2rem;
}
.floor-tit-img {
  height: 2rem;
}
.floor-title {
  position: relative;
}
.floor-tit-img .tit-img {
  height: 100%;
  margin: auto;
  overflow: hidden;
}
.floor-tit-img .tit-img img {
  min-width: 1px;
  width: auto;
  max-height: 100%;
  text-align: center;
  margin: 0 auto;
}
.floor-tit-img .tit-img,
.floor-tit-img .tit-img img {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.ll_fadeIn {
  -webkit-transition: opacity 0.5s ease-in;
  opacity: 0;
  transition: opacity 0.5s ease-in;
}
.floor-the-container {
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0;
}
.floor.floor-7304 .bdr-bottom {
    border-bottom-color: #4727ea;
}

.floor-container:first-child {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
}
.floor .bdr-bottom {
    border-bottom: 1px solid #4727ea;
}
.floor-container {
    width: 100%;
    font-size: 0;
    overflow: hidden;
}
.floor-the-container:after {
  content: "";
  display: block;
  height: 0;
  font-size: 0;
  font-family: Helvetica;
  overflow: hidden;
}
.fls06056 .floor-graphic-item {
    background-color: transparent;
}
.floor-graphic-item {
    width: 100%;
    background: #4727ea;
    font-size: 100%;
    overflow: hidden;
}
.fls06056_ui0 {
    height: 7.5rem;
    overflow: hidden;
}
.floor .floor-container:last-child {
  border-bottom: none;
}
.floor-container:last-child {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.fls06056_ui0 .floor-items {
    background: transparent;
}
.fls06056 .floor-items {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    background: #4727ea;
    margin: 0 .36667rem;
}
.fls06056_ui0 .floor-item {
    width: 4.35rem;
    background: transparent;
}
.fls06056 .floor-item {
        width: 100%;
    margin: 0 0.2rem 0.2rem 0.2rem;
    height: 7.5rem;
}
.floor-item, .floor-item-slide {
    width: 100%;
    font-size: 100%;
}
.floor-item {
    overflow: hidden;
}
.fls06056 .floor-item-link:first-child {
    border-left: none;
}
.fls06056 .floor-item-link {
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    border-left: 2px solid transparent;
}
.fls06056 .floor-item-link .good-img-wrap {
    width: 3.25rem;
    height: 3.25rem;
    border-radius: .4rem;
}
.fliper.anim_back .poker {
    -webkit-animation: flipBackY 1s ease both;
    animation: flipBackY 1s ease both;
}
.fls06056_ui0 .good-img-wrap {
    position: absolute;
    top: -1rem;
    left:0.8rem;
    width: 3.79rem!important;
    height: 4.3rem!important;
    margin-left: -1.575rem;
}
.fliper .poker {
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.fls06056 .floor-item-link .good-img-wrap .good-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.fliper.anim_back .poker_front {
    z-index: 2;
}
.fliper .poker_back, .fliper .poker_front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4727ea;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
}
.fliper .poker_front {
    z-index: 2;
}
.floor-container img {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.ll_fadeIn {
    -webkit-transition: opacity .5s ease-in;
    opacity: 0;
    transition: opacity .5s ease-in;
}
.fls06056 .floor-item-link .good-img-wrap .good-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.fliper.anim_back .poker_front {
    z-index: 2;
}
.fliper .poker_back, .fliper .poker_front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#4727ea;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
}
.fliper .poker_front {
    z-index: 2;
}
.floor-container img {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.ll_fadeIn {
    -webkit-transition: opacity .5s ease-in;
    opacity: 0;
    transition: opacity .5s ease-in;
}
.fls06056_ui0-subtitle, .fls06056_ui0-title {
    position: absolute;
    width: 100%;
    color: #fff;
    text-align: center;
    z-index: 2;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.fls06056_ui0-title {
    bottom: 0;
    height: 1.56667rem;
    line-height: 1.56667rem;
    font-size: .85rem;
}
.floor-container img {
    width: 100%;
    height: auto;
    overflow: hidden;
}

.ll_fadeIn {
    -webkit-transition: opacity .5s ease-in;
    opacity: 0;
    transition: opacity .5s ease-in;
}
.fls06056_ui0-bg {
    left: 0;
    top: 0;
    z-index: 2;
}
.floor-container:first-child {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.floor .bdr-bottom {
  border-bottom: 1px solid #f5f5f5;
}
.floor-container {
  width: 100%;
  font-size: 0;
  overflow: hidden;
}
.floor-7319 .floor-graphic-item {
  background-color: transparent;
}
.fls06056 .floor-graphic-item {
  background-color: transparent;
}
.floor-graphic-item {
  width: 100%;
  background: transparent;
  font-size: 100%;
  overflow: hidden;
}
.fls06056_ui1 {
  height: 7rem;
  overflow: hidden;
}
.floor-graphic-item {
  width: 100%;

  font-size: 100%;
  overflow: hidden;
}
.graphic-col04-bg,
.graphic-col04-sm {
  position: relative;
  width: 25%;
  float: left;
}
.graphic-col04-bg {
  height: 7rem;
}
.graphic-separation {
  background: rgb(255, 255, 255);
  position: relative;
  font-family: PingFangSC-Light, PingFang-Medium, PingFangSC-Regular, Helvetica,
    Droid Sans, Arial, sans-serif;
  font-size: 0;
}
.fls06056 .floor-item-link:first-child {
  border-left: none;
}
.fls06056 .floor-item-link {
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-left: 2px solid transparent;
}
.graphic-col04-bg .real-show.style-1,
.graphic-col04-sm .real-show.style-1 {
  padding: 0;
  border-radius: 0.5rem;
}
.graphic-col04-bg .real-show,
.graphic-col04-sm .real-show {
  padding: 0.325rem 0 0.25rem 0.5rem;
}
.real-show {
  padding: 0.325rem 0 0.25rem;
}
.real-show {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.real-show,
.show-img,
.show-img img {
  width: 100%;
  height: 100%;
}
.fls06056 .floor-item-link .good-img-wrap {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.4rem;
}
.fliper.anim_back .poker {
  -webkit-animation: flipBackY 1s ease both;
  animation: flipBackY 1s ease both;
}
.fliper .poker {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.floor-container img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.ll_fadeIn {
  -webkit-transition: opacity 0.5s ease-in;
  opacity: 0;
  transition: opacity 0.5s ease-in;
}
.fls06056_ui1-sku-img {
  position: absolute;
  top: 1.3rem;
  left: 0.6rem;
  width: 4.1rem !important;
  height: 4.15rem !important;
}
.graphic-col04-bg .graphic-text {
  height: 1.9rem;
}
.graphic-col04-bg .graphic-text,
.graphic-col04-sm .graphic-text {
  width: 100%;
  padding: 0;
  float: none;
}
.graphic-text {
  float: left;
  width: 55.625%;
  padding: 0 0 0 0.45rem;
  overflow: hidden;
}
.real-show .style-1.graphic-tit {
  top: 0.15rem;
  font-size: 0.7rem;
  border-radius: 0.25rem;
}
.real-show .graphic-tit.style-1,
.real-show .graphic-tit.style-2,
.real-show .graphic-wz.style-1,
.real-show .graphic-wz.style-2 {
  text-align: center;
  display: block;
  width: 80%;
  color: #333;
  position: absolute;
  left: 10%;
  height: 1rem;
  line-height: 1rem;
}
.graphic-tit {
  color: #333;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.125rem;
  display: inline-block;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.real-show .style-1.graphic-wz {
  bottom: 5%;
  font-size: 0.6rem;
  border-radius: 0.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.real-show .graphic-tit.style-1,
.real-show .graphic-tit.style-2,
.real-show .graphic-wz.style-1,
.real-show .graphic-wz.style-2 {
  text-align: center;
  display: block;
  width: 80%;
  color: #333;
  position: absolute;
  left: 10%;
  height: 1rem;
  line-height: 1rem;
}
.graphic-col04-bg .graphic-wz,
.graphic-col04-sm .graphic-wz {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: box;
  line-clamp: 1;
  box-orient: vertical;
}
.graphic-wz {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: box;
  line-clamp: 1;
  box-orient: vertical;
  color: #686868;
  font-size: 0.6rem;
  line-height: 0.825rem;
  height: 0.75rem;
}
.floor-container img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.ll_fadeIn {
  -webkit-transition: opacity 0.5s ease-in;
  opacity: 0;
  transition: opacity 0.5s ease-in;
}
.fls06056_ui1-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 5.35rem !important;
  height: 7rem !important;
  z-index: 2;
}

.ms img {
  width: 90% !important;
}
.floor-the-container {
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  height: 92%;
}
.floor {
  font-size: 0;
  width: 100%;
  overflow: hidden;
}
.graphic-col03-sm {
  width: 33.33%;
  float: left;
  height: 6rem;
  overflow: hidden;
}
.graphic-separation {
  background: #fff;
  position: relative;
  font-family: PingFangSC-Light, PingFang-Medium, PingFangSC-Regular, Helvetica,
    Droid Sans, Arial, sans-serif;
  font-size: 0;
}
.floor.seckill .floor-the-container {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.floor .floor-container:last-child {
  border-bottom: none;
}
.floor-container.floor-container-banner {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  width: auto;
  border-radius: 0;
}
.floor-the-container {
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0;
}
.floor .floor-container:last-child {
  border-bottom: none;
}
.floor-container:last-child {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.floor-container:first-child {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.floor-container {
  width: 100%;
  font-size: 0;
  overflow: hidden;
}
.sec_kill_floor {
  box-shadow: 0 1px 1px #f2f2f2;
  background: #fff;
}
.floor-container .sec_kill_floor .title_wrap {
  background: url(../../../server/public/images/bj.png) no-repeat;
  background-size: contain;
}
.sec_kill_floor .title_wrap {
  height: 1.7rem;
  line-height: 1.7rem;
  vertical-align: middle;
}
.floor-graphic-item {
  width: 100%;
  background: #fff;
  font-size: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}
.graphic-separation {
  background: #fff;
  position: relative;
  font-family: PingFangSC-Light, PingFang-Medium, PingFangSC-Regular, Helvetica,
    Droid Sans, Arial, sans-serif;
  font-size: 0;
}
.graphic-col02-bg {
  width: 50%;
  height: 100%;
  position: relative;
  float: left;
}
.real-show,
.show-img,
.show-img img {
  width: 100%;
  height: 100%;
}

.show-img {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
.graphic-separation {
  background: #fff;
  position: relative;
  font-family: PingFangSC-Light, PingFang-Medium, PingFangSC-Regular, Helvetica,
    Droid Sans, Arial, sans-serif;
  font-size: 0;
}
.graphic-col02-bg {
  width: 50%;
  height: 100%;
  border-radius: 1rem;
  position: relative;
  float: left;
}
.show-img {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.floor a {
  text-decoration: none;
}
a,
a:visited {
  text-decoration: none;
  color: #333;
}
.seckill-left-link {
  display: inline-block;
  float: left;
}
.floor-container .seckill-tit-img {
  float: left;
  display: inline-block;
  width: 3.45rem;
  height: 1.35rem;
  margin-top: 0.4rem;
  margin-right: 0.3rem;
  margin-left: 0.45rem;
  background: url(../../../server/public/images/miaosha.png) no-repeat;
  background-size: contain;
}
.title_wrap .seckill-nth,
.title_wrap .seckill-timer,
.title_wrap .seckill-title {
  vertical-align: middle;
}
.floor-container::-webkit-scrollbar {
  display: none;
}
.seckill-nth {
  font-size: 12px;
  color: #232326;
  font-weight: 700;
  display: inline-block;
}
.seckill-timer {
  display: inline-block;
  margin: 0 0 0 6px;
}
.seckill-time {
  width: 18px;
  line-height: 17px;
  color: #232326;
  font-size: 12px;
  position: relative;
}
.seckill-time,
.seckill-time-separator {
  float: left;
  display: inline-block;
  line-height: 16px;
  height: 16px;
  font-size: 12px;
  text-align: center;
  color: #232326;
}
.seckill-time-separator {
  width: 6px;
}

.seckill-time,
.seckill-time-separator {
  float: left;
  display: inline-block;
  line-height: 16px;
  height: 16px;
  font-size: 12px;
  text-align: center;
  color: #232326;
}
.seckill-time:after {
  border-radius: 2px;
  height: 200%;
  content: "";
  width: 200%;
  border: 1px solid #dfdfdf;
  position: absolute;
  top: -1px;
  left: -1px;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  z-index: 10;
}
.seckill-more-link {
  display: inline-block;
  color: #f23030;
  float: right;
  font-size: 10px;
  text-align: right;
  position: relative;
  padding-right: 1.1rem;
}
.seckill-more-icon {
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  background: url(https://wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png)
    no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.4rem;
  top: 0.5rem;
}
.floor .floor-container:last-child {
  border-bottom: none;
}
.floor-container:last-child {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.floor-container {
  width: 100%;
  font-size: 0;
  overflow: hidden;
}
.seckill-new-list {
  position: relative;
  background-color: #fff;
  padding-left: 0.25rem;
}
.seckill-new-item {
  width: 4rem;
  float: left;
}
.seckill-item-img,
.seckill-item-price {
  width: 100%;
  padding: 0 0.25rem;
}
.seckill-new-link {
  display: block;
  position: relative;
}
.floor-container img {
  width: 85%;
  height: auto;
  overflow: hidden;
}

.seckill-photo {
  width: 3.5rem;
  height: 3.5rem;
}
img {
  border: 0;
  vertical-align: top;
}
.seckill-item-price {
  margin: 0 auto;
  text-align: center;
}
.seckill-item-img,
.seckill-item-price {
  width: 100%;
  padding: 0 0.25rem;
}
.seckill-new-price {
  font-family: JDZhengHT-EN-Bold;
  margin-top: 10px;
  display: block;
  color: #e93b3d;
  font-size: 1rem;
  line-height: 1rem;
  height: 1rem;
  font-weight: 900;
  text-align: center;
}
.seckill-new-price em {
  font-size: 0.9rem;
  font-weight: 900;
  padding-right: 2px;
}
em,
i {
  font-style: normal;
}
.seckill-all-item {
  width: 31px;
  padding-left: 11px;
  float: left;
}
.seckill-new-list:after {
  clear: both;
  content: ".";
  height: 0;
  visibility: hidden;
  font-size: 0;
  display: block;
}
.seckill-all-item a {
  text-decoration: none;
  display: block;
}
.seckill-all {
  width: 20px;
  height: 72px;
  background-color: #f5f5f5;
  color: #666;
  font-size: 10px;
  padding: 8px 0;
}
.show-all-icon {
  width: 12px;
  height: 12px;
  background: url(https://wq.360buyimg.com/fd/h5/wxsq_dev/m_jd_index/images/index/jd-sprites_c4019063.png) -107px -109px
    no-repeat;
  background-size: 200px 200px;
  display: block;
  margin: 0 4px 3px;
}
.show-all-title {
  margin: 0 5px;
  display: block;
}
.seckill-original-price {
  color: #999;
  font-size: 0.8rem;
  line-height: 12px;
  margin: 4px 0 11px;
  text-align: center;
  padding: 0 2px;
  display: inline-block;
  position: relative;
  text-decoration: line-through;
}
.seckill-original-price em {
  font-size: 0.7rem;
  position: relative;
  padding-right: 2px;
}
</style>