<template>
  <div class="home">
     <nav-bar title="机票" :leftico="false"></nav-bar> 
     <tab-list></tab-list>
     <menu-line></menu-line>
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
import menuLine from '@/components/menu/MenuLine.vue'
import lowPrice from '@/components/festival/Lowprice.vue'
export default {
  components:{
    NavBar, //首页顶部Nav,
    TabList, //购票tab栏
    menuLine, //菜单
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