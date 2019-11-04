<template id="temp">
  <!-- vue实例外创建 -->
  <div>
    <div class="floor slider-wrapper" id="slideWrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in img" :key="index">
          <img :src="item" alt="" class="is">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

import imgs from "../../../server/public/swiper.json";
// var mySwiper = new Swiper(".swiper-container", {
//   // direction: "vertical",
//   // loop: true,
//   touchRatio : 0.5,
//    on:{
//     touchMove: function(event){}
//       //你的事件
//     },
//   autoplay: {
//     delay: 1000,
//     stopOnLastSlide: false,
//     disableOnInteraction: true,
//     },

//   // 如果需要分页器
//   pagination: ".swiper-pagination"
// });
export default {
  data() {
    return {
      img: imgs,
      swiperOption: {
        pagination: ".swiper-pagination1",
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动播放
          speed:300,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //循环
        loop: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
#slideWrapper {
  background-image: url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/87612/37/163/81594/5da87741E798461ae/d9e455893eb374b8.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 12.2rem;
  text-align: center;
  margin-top: 0;
}
.swiper-container {
  overflow: hidden;
  position: relative;
}
.slide-li>a {
    width: -webkit-calc(100% - 1.25rem);
    width: calc(100% - 1.25rem);
    height: 7rem;
    margin: 0 auto;
    top: 2.25rem;
    position: relative;
    border-radius: .35rem;
}
.swiper-container img {
  width:21.16rem !important;
  height: 9.3rem !important;
  margin-top: 44px !important;
  border-radius: 8px !important;
}
.swiper-slider img{
 border-radius: .24rem;
 width: 25rem;
}
.swiper-slider{
  width: -webkit-calc(100% - 1.25rem);
    width: calc(100% - 90%) !important;
    height: 7rem;
    margin: 0 auto;
    top: 2.25rem;
    position: relative;
    border-radius: .35rem;
}
.swiper-pagination-bullet{
  width: .106667rem !important;
  height: .04rem !important;
  border-radius: 7px !important;
}
.floor {
  font-size: 0;
  width: 100%;
  overflow: hidden;
}
</style>