<template >
  <!-- vue实例外创建 -->
  <div>
      <oneLogin></oneLogin>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import oneLogin from '../components/oneLogin/oneLogin.vue'
export default {
    components:{
        oneLogin,
    }
};
</script>