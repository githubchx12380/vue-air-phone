<template>
  <div id="app">
     <router-view/>
      <van-tabbar>
        <van-tabbar-item icon="home-o" to="/">购票</van-tabbar-item>
        <van-tabbar-item icon="search" dot to="/commend">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<style lang="less">
</style>
