<template id="temp">
  <!-- vue实例外创建 -->
  <div id="commonNav">
    <router-link
      style="width: 20%"
      v-for="(item, index) in f"
      :key="index"
      :to="{name:item[1]}"
     
      class="J_ping"
      report-eventid="MCommonBottom_Home"
    >
      <div class="icon-center">
        <img class="nav-img" :src="item[0]" />
      </div>
    </router-link>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import f from "../../../server/public/footer.json";
export default {
  data() {
    return {
      f
    };
  }
};
</script>
<style scoped>
#commonNav {
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 31;
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  -moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  font-size: 16px;
  height:3rem;
}
#commonNav > a {
  position: relative;
  width: 20%;
  text-align: center !important;
  height: 3rem;
  box-sizing: border-box;
  float: left;
  font-size: 16px;
  background-color: transparent;
  text-align: center;
}
monNav .icon-center {
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 0.0625em;
  height: 0.0625em;
  background-color: transparent;
  z-index: 1;
}
#commonNav .icon-center img {
  position: absolute;
  left: 0.5em;
  bottom: 0;
  z-index: 1;
  width: 4em;
}
</style>