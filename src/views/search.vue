<template>
  <!-- vue实例外创建 -->
  <search></search>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import search from "../child/d-search/d-search.vue"
export default {
   components:{
       search,
   } 
}
</script>
<style lang="less">
</style>