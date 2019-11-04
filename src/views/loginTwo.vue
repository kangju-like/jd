<template id="temp"> <!-- vue实例外创建 -->
    <div>
       <twoLogin></twoLogin> 
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import twoLogin from '../components/twoLogin/twoLogin.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            twoLogin,
        }
    }
</script>