<template>
  <div class="low-price">
      <div class="low-price-title">
        <h3 class="col-title-ico">超值低价</h3>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '~@/assets/css/common.less';
.low-price{
  padding: 3.1vw 1.944vw;
  background-color: @back-color;
  .low-price-title{
    h3{
      font-weight: 400;
      font-size: 5.756vw;
      padding: 0 3.856vw;
      position: relative;
    }
     .col-title-ico::after{
        content: '';
        display: block;
        position: absolute;
        left: 0.556vw;
        top: 50%;
        bottom: 0;
        margin-top: -2.4vw;
        height:5vw;
        width: 0.833vw;
        border-radius: 0.278vw;
        background-color: #02c0e0;
      }
  }
}
</style>