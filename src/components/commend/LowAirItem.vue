<template>
  <div class="low-item">
      <div>
        <p class="city-item">上海 → 哈尔滨</p>
        <p class="discount">
          <span>0.7折</span>
        </p>
        <p class="date-price">
          <span class="date">05-29</span>
          <span class="price">¥140</span>
        </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.low-item{
  margin: 1.389vw 0;
  width: 48.5%;
  height: 20vw;
  background-image: url('~@/assets/img/low-price-img.png');
  background-size: 100% 20vw;
  background-repeat: no-repeat;
  padding: 2.778vw 4vw 2.778vw 2.222vw;
  >div:nth-child(1) {
    .city-item{
      font-weight: 700;
      font-size: 3.889vw;
    }
    .discount{
      height: 18px;
      padding: 5px 5px 17px 0;
      position: relative;
      span{
        position: absolute;
        right: 0px;
        background-color: #fff5e6;
        color: #FF6600;
        padding: 2px 3px;
        font-size: 10px;
      }
    }
    .date-price{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .date{
        font-size: 12px;
        color: #999;
      }
      .price{
        font-size: 17px;
        font-weight: 700;
        color: #FF6600;
      }
    }
  }
}
</style>