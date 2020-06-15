<template>
  <div class="home">
    <van-sticky  @scroll="scrollTop">
      <van-nav-bar
      :class="[{topactiveclass:topActive},{topactiveclass1:myprofile}]"
      @click-left="$router.back()"
      :title="title" 
      :left-text="lefttext" 
      :border="false"
      :left-arrow="leftico" 
      >
        <template #right>
          <van-icon @click="$router.push('/chat')" name="service-o" size="18" />
        </template>
      </van-nav-bar>
     </van-sticky> 
  </div>
</template>

<script>
export default {
  props:['title','lefttext','leftico'],
  data() {
    return {
      topActive:false,
      myprofile:false
    }
  },
  methods:{
    scrollTop(top) {
      if(top.scrollTop > 80 && this.$route.path.indexOf('air') != -1) {
        this.topActive = true
      }else{
        this.topActive = false
      }
      if(top.scrollTop > 80 && this.$route.path.indexOf('personalcenter') != -1) {
        this.myprofile = true
      }else{
        this.myprofile = false
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
/deep/ .topactiveclass1 {
    transition: all 0.8s ease 0s;
    background-color: #2b73c7;
}
</style>