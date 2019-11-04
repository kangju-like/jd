<template >
  <div class="floor love-floor" id="recFloor">
    <div class="recTab j_recTab"></div>
    <div class="flsPit fls-tit">
      <div class="floor-title floor-tit-img" style="margin-top:.5rem;" data-floorname="为您推荐">
        <span class="tit-img">
          <img
            class="ll_fadeIn"
            style="width: calc(100% - 1.2rem); border-radius:0.3rem; margin:0 auto; height: 100%; opacity: 1;"
            src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
          />
        </span>
      </div>
    </div>
    <div class="floor-the-container f-6" style="border-top: 1px #f0f2f5 solid;">
      <ul class="find-similar-ul li_margin j_rec_goods_list clearfix">
        <li v-for="(item, index) in lis" :key="index" class="similar-li  j_similar_li j_similar_goods expo_loaded">
          <a
           
            href="javascript:void(0);"
            
          >
            <div class="similar-product">
              <div class="similar-posre">
                <img
            
                  :src="item.img"
                  class="j_rec_goods_pic opa1 ll_fadeIn"
                  
                  style="width: 10.6rem; height: 10.6rem; opacity: 1;"
                />
              </div>
              <span class="similar-product-text"><img v-if="item.img_title!=null" class="chosen ll_fadeIn" onerror="__reloadResource(this)" :src="item.img_title" loaded="1" style="opacity: 1;     width: 2.5rem !important;">{{item.title}}</span>
              <p class="similar-product-info">
                <span class="similar-product-price">
                  ¥&nbsp;
                  <span class="big-price">{{item.price}}</span>
                </span>
                <span class="rec-price-tag" v-if="item.tag!=null">{{item.tag}}</span>
                <span
                
                  class="guess-button j_see_similar"
               
                >看相似</span>
              </p>
              <p class="similar-product-info"></p>
            </div>
          </a>
        </li>
        </ul>
      <div style="clear: left;"></div>
    </div>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import lis from '../../../server/public/lis.json'
export default {
  data() {
    return {
      lis
    }
  },
};
</script>

<style  lang="less">
@color: #4727ea;
.love-floor {
    background-color: @color;
    overflow: hidden;
   
}
.floor {
    font-size: 0;
    width: 100%;
    overflow: hidden;
}
.f-6{
  margin-left: .6rem !important;
    margin-right: .7rem !important;
    margin-top: 1rem;
}
  .floor-the-container {
    position: relative;
    
    margin-bottom: .5rem;
    font-size: 0;
}
.rec-price-tag {
    border: 1px solid #e4393c;
    color: #e4393c;
    font-size: 10px;
    padding: 0 3px ;
    margin-right: 5px;
}
.similar-product .chosen {
    width: auto;
    line-height: 13px;
}
.similar-product .chosen, .similar-product .samsb {
    height: 13px;
    display: inline-block;
    position: relative;
    top: 0;
    margin-right: 4px;
}
.similar-product img {
    width: 100%;
    display: block;
}
.li_margin li:nth-of-type(odd){ margin-right: .1rem;}
.li_margin li:nth-of-type(even){ margin-left: .1rem;}
.flsPit.fls-tit {
    height: 1.75rem;
}

.floor-tit-img {
    height: 2.2rem;
}
.floor-title {
    position: relative;
}
.floor-tit-img .tit-img, .floor-tit-img .tit-img img {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.floor-tit-img .tit-img {
    height: 100%;
    margin: auto;
    overflow: hidden;
}
.floor-the-container {
    position: relative;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
    font-size: 0;
}
.similar-li {
    float: left;
    width: 49%;
    box-sizing: border-box;
    padding-bottom: 4px;
    position: relative;
}
img {
    border: 0;
    vertical-align: top;
}
.similar-product {
    background-color: #fff;
    font-size: 0;
    padding-bottom: 0;
}
.similar-posre {
    position: relative;
}
.floor .opa1 {
    opacity: 1;
    -webkit-transition: opacity .3s ease-in;
    transition: opacity .3s ease-in;
}
.similar-product img {
    width: 100% !important;
    display: block;
}
.ll_fadeIn {
    -webkit-transition: opacity .5s ease-in;
    opacity: 0;
    transition: opacity .5s ease-in;
}
.similar-product-text {
    box-sizing: border-box;
    height: 31px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    color: #232326;
    margin-top: 5px;
    line-height: 16px;
    margin-bottom: 3px;
    padding: 0 4px;
}
.similar-product .chosen {
    width: auto;
    line-height: 13px;
}
.guess-button {
    display: block;
    position: absolute;
    top: 0;
    right: 8px;
    text-align: center;
    color: #686868;
    font-size: 12px;
    width: 49px;
    height: 24px;
    line-height: 25px;
}

.similar-product .chosen, .similar-product .samsb {
    height: 13px;
    display: inline-block;
    position: relative;
    top: 0;
    margin-right: 4px;
}
.guess-button:after {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: top left;
    transform-origin: top left;
}
.love-floor p {
    box-sizing: border-box;
}
.similar-product-info {
    font-size: 13px;
    overflow: hidden;
    position: relative;
    height: 26px;
}
.similar-product img {
    width: 100%;
    display: block;
}
.love-floor p {
    box-sizing: border-box;
}
.similar-product-info {
    font-size: 13px;
    overflow: hidden;
    position: relative;
    height: 26px;
}
.similar-product-price {
    color: #f23030;
    display: inline-block;
    padding: 0 5px 0 4px;
    position: relative;
    top: 1px;
    height: 25px;
    line-height: 25px;
}
.similar-product-price .big-price {
    font-size: 16px;
}
</style>
