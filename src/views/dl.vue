<template> <!-- vue实例外创建 -->
    <div id="dl">
    <Content></Content>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import Content from '../child/d-content/d-content.vue'
    export default {
        components: {
            Content,
        }
    }
</script>
<style lang="less">
    
</style>