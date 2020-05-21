<template>
  <div class="low-item">
      <div>
        <p class="city-LowAirItem">{{LowAirItem.depAirportCode | CityFilter}} → {{LowAirItem.arrAirportCode | CityFilter}}</p>
        <p class="discount">
          <span>{{LowAirItem.discountStr}}</span>
        </p>
        <p class="date-price">
          <span class="date">{{LowAirItem.depDate.substring('5')}}</span>
          <span class="price">¥{{LowAirItem.price}}</span>
        </p>
      </div>
  </div>
</template>

<script>
export default {
    props:['LowAirItem'],
    filters:{
      CityFilter(val) {
        switch (val) {
          case 'CAN':
              return '广州'
            break;
          case 'BJS':
              return '北京'
          case 'SHA':
              return '上海'
          case 'HGH':
              return '杭州'
          case 'SZX':
              return '深圳'
          case 'CKG':
              return '重庆'
          case 'HKG':
              return '香港'
          default:
              return '香港'
            break;
        }
      }
    }
}
</script>

<style scoped lang="less">
.low-item{
  margin: 1.389vw 0;
  width: 48.5%;
  background-image: url('~@/assets/img/low-price-img.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 2.222vw 4.167vw;
  >div:nth-child(1) {
    .city-LowAirItem{
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