<template>
  <div class="commend-box">
      <div class="commend">
          <van-grid :border="false">
            <van-grid-item icon="coupon" text="低价机票" />
            <van-grid-item icon="balance-list" text="多地比价" />
            <van-grid-item icon="volume" text="航班动态" />
            <van-grid-item icon="manager" text="值机选座" />
          </van-grid>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="less">
@import '~@/assets/css/common.less';
.commend-box{
  padding: 1.944vw;
  border-radius: 0.833vw;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
  .commend{
    background-color: @back-color;
  }
}
</style>