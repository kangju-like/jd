<template> <!-- vue实例外创建 -->
    <div>
        <Search></Search>
        <Footer></Footer>
        <Content></Content>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import Search from '../../src/child/c-search/c-search.vue'
import Content from "../../src/child/c-content/c-content.vue"
import Footer from '../components/footer/footer.vue'
    export default {
        data() {
            return {
                
            }
        },
        components: {
            Search,
            Footer,
            Content
        }
    }
</script>