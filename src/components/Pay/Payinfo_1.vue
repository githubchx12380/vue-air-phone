<template>
  <div>
    <van-cell is-link @click="flightInfoShow = true" v-if="airInfo.depDate" class="air_info">
      <span v-if="airInfo.arrDate">{{airInfo.depDate.replace('2020-','')}}</span>
      <span>{{weekdate}}</span>
      <span>{{airInfo.depTime}}</span>
      <span>{{airInfo.depAirport + ' → ' + airInfo.arrAirport}}</span>
    </van-cell>

    <van-popup v-model="flightInfoShow" class="popup">
      <p>
        <span v-if="airInfo.depDate">{{airInfo.depDate.replace('2020-','')}}</span>
        <span>{{weekdate}}</span>
        <span>{{$route.query.dep + '-' + $route.query.arr}}</span>
      </p>
      <van-row style="margin:6.944vw 0;">
        <van-col class="flight_date" span="7">
          <div>{{airInfo.depTime}}</div>
          <div>{{airInfo.depAirport + airInfo.depTerminal}}</div>
        </van-col>
        <van-col class="yongshi" span="10">
          <div>{{airInfo.flightTime}}</div>
          <div>--------------------------➤</div>
        </van-col>
        <van-col class="flight_date" span="7" style="text-align:center">
          <div>{{airInfo.arrTime}}</div>
          <div>{{airInfo.arrAirport + airInfo.arrTerminal}}</div>
        </van-col>
      </van-row>
      <div class="flight_btm">
        <span>{{airInfo.planeFullType}}</span>
        <span>{{airInfo.airCode}}</span>
        <span>{{airInfo.mealDesc}}</span>
        <span>{{airInfo.discountStr}}</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
    data() {
        return {
              flightInfoShow: false,
        }
    },
    props:['airInfo'],
    computed: {
    weekdate() {
      let date = this.airInfo.depDate;
      if (date) {
        var newDate = new Date(date.replace(/-/g, "/"));
        var weekday = new Array(7);
        weekday[0] = "周日";
        weekday[1] = "周一";
        weekday[2] = "周二";
        weekday[3] = "周三";
        weekday[4] = "周四";
        weekday[5] = "周五";
        weekday[6] = "周六";
        return weekday[newDate.getDay()];
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-cell__value {
  font-size: 3.611vw;
  span {
    font-size: 3.611vw;
    margin: 0 1.389vw;
  }
}

.city_date {
  font-size: 3.889vw;
  > div {
    font-size: 3.889vw;
  }
}
.popup {
  width: 90%;
  padding: 4.167vw 4.167vw;
  > p {
    span {
      font-weight: 600;
      font-size: 3.889vw;
      margin-right: 2.778vw;
    }
  }
  .flight_date {
    > div:nth-child(1) {
      font-size: 6.111vw;
    }
    > div:nth-child(2) {
      font-size: 3.611vw;
      margin-top: 2.778vw;
    }
  }
  .yongshi {
    > div:nth-child(1) {
      margin-top: 2.778vw;
      font-size: 2.778vw;
      text-align: center;
    }
    > div:nth-child(2) {
      font-size: 3.333vw;
      color: #999;
    }
  }
  .flight_btm{
    display: flex;
    justify-content: center;
    span{
      font-size: 2.778vw;
      color: #999;
      margin: 0 0.556vw;
    }
  }
}
</style>