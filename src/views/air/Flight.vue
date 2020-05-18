<template>
  <div class="home">
     <nav-bar></nav-bar> 
     <tab-list></tab-list>
     <commend></commend>
     <low-price></low-price>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
     <div>--------------</div>
  </div>
</template>

<script>
import NavBar from '@/components/air/NavBar.vue'
import TabList from '@/components/air/TabList.vue'
import commend from '@/components/commend/commend.vue'
import lowPrice from '@/components/commend/Lowprice.vue'
export default {
  components:{
    NavBar, //首页顶部Nav,
    TabList, //购票tab栏
    commend, //推荐
    lowPrice, //低价
  }
}
</script>

<style scoped lang="less">
.home{
  background-image: url('~@/assets/img/backimg.png') ;
  background-repeat: no-repeat;
  background-size: 100% 63.333vw;
  width: 100%;
  background-color: #f2f2f2;
}
</style>