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
        <div>
          <van-icon name="clock-o" />航班起飞前1天完成出票
        </div>
      </van-col>
    </van-row>

    <van-row class="matters">
      <van-col span="6" class="mattersparent" @click="show1 = !show1">
        <div class="mattersItem">退改签规则</div>
      </van-col>
      <van-col span="9" class="mattersparent" @click="show2 = !show2">
        <div class="mattersItem">儿童/婴儿票说明</div>
      </van-col>
      <van-col span="8" class="mattersparent" @click="show3 = !show3">
        <div class="mattersItem">行李及购票须知</div>
      </van-col>
    </van-row>

    <van-popup v-model="show1" class="popup" :closeable="true">
      <h2>退改签规则</h2>
      <pre>
        航空公司规定以各航空公司官方网站的公示为准。
      折扣说明：经济舱折扣以标准经济舱全价为基础计算得出。
      申请改签，同舱位变更时，如变更前后的票面价之间存在差价，则补足差价；如同时存在改期手续费和升舱费，则需同时收取改期手续费和舱位差额。西部航空若发生航班延误或取消，春运、国庆时段可变更为前后3天（含）航班，其他时段可免费变更至西部航空前后7天（不含）航班。航班取消或离港时间变更超过15分钟(不含)以上可办理非自愿退款。无论何种原因航班延误或者取消，西部航空不提供经补偿。如已办理自愿付费变更、签转的客票，后续再发生自愿或非自愿退、改、签业务时，所收取的变更费一律不退还。
      </pre>
    </van-popup>
    <van-popup v-model="show2" class="popup" :closeable="true">
      <h2>儿童票购买说明</h2>
      <pre style="display:block;">
1. 2岁(含)-12岁(不含)可购买儿童票
2. 票价：一般情况下，成人全价票(经济舱)*50％＋燃油*50％。对于国内部分航班，由于成人票的折扣可能比儿童票更低，因此，儿童购买此类低折扣的成人票可能更加优惠，为您智能推荐最优惠的购票方案
3. 儿童乘机须成人陪同，1名成人最多携2名儿童
4. 儿童单独乘机，请提前至航司售票处申请购买
5. 儿童须和成人购买同等舱位机票
6. 无身份证儿童，证件类型可选身份证(填写户口簿身份证号)、护照
      </pre>
      <h2>婴儿票购买说明</h2>
      <pre>
1. 14天(含)-2岁(不含)可购买婴儿票
2. 婴儿乘机须成人陪同，1名成人最多携1名婴儿
3. 购买婴儿票须在填写页添加婴儿及陪同成人信息
4. 有出生证明婴儿，证件类型可选“出生证明”并携出生证明登机
5. 有身份证号婴儿，证件类型可选“身份证”并携户口簿登机
6. 根据民航局规定，每类机型的婴儿旅客载运数量均有不同的载运标准。如果该航班婴儿载运数量已满，您所支付的婴儿票款将全部退还
7. 早产儿不够90天不适宜乘机，由于各个航司规定有所不同，可能存在无法乘机的风险，请您实现咨询航司，以航司确认为准。
      </pre>
    </van-popup>
    <van-popup v-model="show3" class="popup" :closeable="true">
      <h2>行李及购票须知</h2>
      <pre>
手提行李：1件，7KG，20×30×40CM；托运行李：无免费托运行李；婴儿票行李：无免费行李额，但可以免费携带或托运一件重量不超过7公斤、体积不超过20CM×40CM×55CM的全折叠式婴儿手推车或摇篮。若重量或体积超过上述标准，则必须作为托运行李免费运输。超规行李收费：0-800KM（不含）每公斤10元、800-1600KM（不含）每公斤14元、1600KM以上每公斤16元；以公斤计量单位，公斤数舍去小数取整至个位，收费总金额舍去个位取整至十位。登机口按300每件的逾重行李费收取费用。行李收费标准以实时购买为准。温馨提示：怀孕超过32周不足36周的健康孕妇、担架旅客、无成人陪伴儿童、盲人旅客、残疾旅客、病患旅客、犯人等特殊旅客需要提供特殊保障服务，切勿直接在网上购票，请致电95117进行咨询。
      </pre>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: ["airInfo"],
  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  }
};
</script>

<style scoped lang="less">
.pay_info2 {
  padding: 0 4.167vw 4.167vw 4.167vw;
  background-color: #fff;
  .van-info2-row {
    border-top: 0.278vw solid #ccc;
    padding: 2.778vw 1.944vw;
  }
  .price {
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
  .else-info {
    padding-left: 2.778vw;
    > div:nth-child(1) {
      margin-bottom: 1.667vw;
      span {
        color: #555;
        margin-right: 6.944vw;
        font-size: 3.333vw;
      }
    }
    > div:nth-child(2) {
      display: flex;
      align-items: center;
      font-size: 3.333vw;
      color: #999;
    }
  }
  .matters {
    .mattersparent {
      margin-right: 1.111vw;
    }
    .mattersItem {
      font-size: 3.333vw;
      border: 0.278vw solid #00bcd4;
      color: #1ba9ba;

      padding: 1.944vw 1.778vw;
      border-radius: 0.833vw;
      text-align: center;
    }
  }
}
.popup {
  width: 90%;
  padding: 2.778vw;
}
h2 {
  text-align: center;
  margin: 1.944vw 0;
  font-size: 4.444vw;
}
pre {
  white-space: pre-wrap; /* css3.0 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  font-size: 3.889vw;
  font-family: inherit
}
</style>