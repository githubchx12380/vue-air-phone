<template>
  <div class="paymoney_info">
      <h2>请检查您的机票信息</h2>
      <h4>出发到达城市:</h4>
      <van-row>
          <van-col span="8" class="dep_city">广州</van-col>
          <van-col span="8" class="city_middle">------------------➤</van-col>
          <van-col span="8" class="arr_city">上海</van-col>
      </van-row>
      <h3>出发时间:</h3>
      <van-row  class="dep_date">2020-04-20</van-row>
      <h3>出行人员机票信息</h3>
      <van-row class="person">
          <van-col span="12">
              <div style="margin-bottom:1.389vw;">姓名</div>
              <div style="font-size:5.556vw">陈某</div>
          </van-col>
          <van-col span="12">
              <div>身份证</div>
              <div>4421**********o********</div>
          </van-col>
      </van-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.paymoney_info{
    padding: 4.444vw 0;
        text-align: center;
    h2{
       
        font-size: 5vw;
    }
    h4{
        padding: 10px 0 0 0;
        color: #1989fa;
    }
    .dep_city{
        font-size: 5.556vw;
    }
    .arr_city{
        font-size: 5.556vw;
    }
    .city_middle{
        color: #555;
    }
    h3{
         color: #1989fa;
         padding: 5vw 0 2.222vw 0;
    }
    .dep_date{
        font-size: 6.389vw;
    }
    .person{
        padding: 8px 0;
        border: 1px solid #ccc;
    }
}
</style>