<template>
  <div class="pay_info2">
    <van-row class="van-info2-row">
      <van-col span="6" class="price">
        <div>¥449</div>
        <div>超优惠经济舱</div>
      </van-col>
      <van-col span="18" class="else-info">
        <div>
          <span>机建+燃油 ¥50</span>
          <span>尊享飞服务 ¥29</span>
        </div>
        <div><van-icon name="clock-o" />航班起飞前1天完成出票</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: ["airInfo"]
};
</script>

<style scoped lang="less">
.pay_info2 {
  padding: 0 4.167vw;
  .van-info2-row{
    border-top: 0.278vw solid #ccc;
    padding: 2.778vw 1.944vw;
  }
  .price{
    border-right: 1px solid #999;
    div:nth-child(1) {
      color: #ff9933;
      margin-bottom: 1.389vw;
    }
    div:nth-child(2) {
      font-size: 3.333vw;
      color: #999;
    }
  }
  .else-info{
    padding-left: 2.778vw;
    >div:nth-child(1) {
      margin-bottom: 1.667vw;
      span{
        color: #555;
        margin-right: 6.944vw;
        font-size: 3.333vw;
      }
    }
    >div:nth-child(2) {
      display: flex;
      align-items: center;
      font-size: 3.333vw;
      color: #999;
    }
  }
}
</style>