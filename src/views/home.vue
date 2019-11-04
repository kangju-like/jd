<template>
  <!-- vue实例外创建 -->
  <div id="home">
    <Search></Search>
    <Swiper></Swiper>
    <Nav></Nav>
    <Footer></Footer>
    <Content></Content>
  <Lis></Lis>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import Search from "../components/search/search.vue";
import Swiper from "../components/swiper/swiper.vue";
import Nav from "../components/nav/nav.vue"
import Footer from "../components/footer/footer.vue"
import Content from '../components/content/content.vue'
import Lis from '../components/lis/lis.vue'
export default {
  components: {
    Search,
    Swiper,
    Nav,
    Footer,
    Content,
    Lis
  },
//     methods: {
//    handleScroll(){
     
//    console.log(window.scrollY)
//   //  window.scrollY>6?document.querySelector(".mjd-header").background
    
// } ,


//  },
//  mounted () {
//    window.addEventListener('scroll',this.handleScroll)
   
// }
}
</script>
<style>
</style>