<template>
  <div class="low-tab">
      <div class="low-tab-item low-img-1">
          <p>周末出行</p>
          <span>5、6月周末</span>
      </div>
      <div class="low-tab-item low-img-2">
           <p>端午出行</p>
          <span>06.25~06.27</span>
      </div>
      <div class="low-tab-item low-img-3">
           <p>暑假出行</p>
          <span>08.01~08.31</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '~@/assets/css/common.less';
.low-tab{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  .low-tab-item{
    width: 32%;
    background-color: red;
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16);
    background-color: @back-color;
    padding: 8px;
    background-size: 40px 30px;
    background-repeat: no-repeat;
    background-position: right bottom;
    p{
      font-weight: 600;
      font-size: 16px;
    }
    span{
      font-size: 9px;
    }
  }
  .low-img-1{
    background-image: url('~@/assets/img/low-price-1.png');
  }
  .low-img-2{
    background-image: url('~@/assets/img/low-price-2.png');
  }
  .low-img-3{
    background-image: url('~@/assets/img/low-price-3.png');
  }
}

</style>