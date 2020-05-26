<template>
  <div id="app">
     <router-view/>
      <van-tabbar v-if="!$route.meta.isNavbar" v-model="active" :route="true">
        <van-tabbar-item icon="home-o" to="/air">购票</van-tabbar-item>
        <van-tabbar-item icon="search" to="/commend">旅游</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/air/cart">订单</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/personalcenter">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0
    }
  }
}
</script>

<style>

</style>