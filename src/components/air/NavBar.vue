<template>
  <div class="home">
      <van-nav-bar
      title="机票" 
      left-text="返回" 
      :border="false"
      :left-arrow="false" 
      >
        <template #right>
          <van-icon name="service-o" size="18" />
        </template>
      </van-nav-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '~@/assets/css/common.less';
/deep/ .van-nav-bar{
  background-color: rgba(0, 0, 0, 0);
   .van-nav-bar__text{
    color: @flight-home-nav;
  }
  .van-nav-bar__title{
    color: @flight-home-nav;
    font-size: 5vw;
  }
  .van-nav-bar__right{
    .van-icon-service-o{
      color: @flight-home-nav;
    }
  }
}
</style>