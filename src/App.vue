<template>
  <div id="app">
     <router-view/>
      <van-tabbar v-if="!$route.meta.isNavbar" v-model="active">
        <van-tabbar-item icon="home-o" to="/air">购票</van-tabbar-item>
        <van-tabbar-item icon="search" dot to="/commend">旅游</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/air/cart" badge="5">订单</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20" to="/personalcenter">我的</van-tabbar-item>
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