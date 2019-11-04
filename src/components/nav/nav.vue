<template>
  <!-- vue实例外创建 -->
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <a href="javascript:void(0);" v-for="(item, index) in data.r1" :key="index">
          <img :src="item[1]" />
          <span v-text="item[0]"></span>
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:void(0);" v-for="(item, index) in data.r2" :key="index">
          <img :src="item[1]" />
          <span v-text="item[0]"></span>
        </a>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import navdata from "../../../server/public/nav.json";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      data: navdata,
      swiperOption: {
        pagination: ".swiper-pagination1",
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动播放
        speed: 300,
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


.swiper-slide a {
   
    width: 20%;
    text-align: center;
    display: block;
    float: left;
  
}

.swiper-pagination-bullet {
    opacity: 1;
    background: #f38405 !important;
    width: 8px;
    height: 3px;
    border-radius: 7px;
}
.swiper-container{
      width: 100%;
    height: 12.5rem;
    border-bottom: #666 1px solid;
}
.swiper-slide span {
    display: block;
    margin-top: .3rem;
    font-size: .8rem;
    color: #666;
}
.swiper-slide img {
    width: 3rem;
    margin-top: .5rem;
}
</style>