<template>
  <div class="myprofile">
      <nav-bar :leftico="true"></nav-bar>
      <img class="back-img" src="@/assets/img/myprofile-back.jpg" alt="">
      <div class="head_img">
          <div class="img"></div>
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/air/NavBar.vue'
export default {
    components:{
        NavBar
    }
}
</script>

<style scoped lang="less">
.myprofile{
    height: 104.167vw;
    position: relative;
   .back-img{
       position: absolute;
       top: -120vw;
       width: 100%;
   }
   .head_img{
        position: absolute;
        z-index: 1;
        left: 50%;
        margin-left:-10.278vw ;
        background-color: red;
        height: 26.389vw;
        width: 20.833vw;
    }
}
/deep/ .van-icon-arrow-left{
    color: white;
    font-size: 5.556vw;
}

</style>