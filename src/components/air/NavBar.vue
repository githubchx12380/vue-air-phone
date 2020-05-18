<template>
  <div class="home">
    <van-sticky  @scroll="scrollTop">
      <van-nav-bar
      :class="{topactiveclass:topActive}"
      title="机票" 
      left-text="返回" 
      :border="false"
      :left-arrow="false" 
      >
        <template #right>
          <van-icon name="service-o" size="18" />
        </template>
      </van-nav-bar>
     </van-sticky> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      topActive:false
    }
  },
  methods:{
    scrollTop(top) {
      if(top.scrollTop > 80) {
        this.topActive = true
      }else{
        this.topActive = false
      }
    }
  }
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
/deep/ .topactiveclass{
    transition: all 0.8s ease 0s;
    background-color: rgb(27, 169, 186);
}
</style>