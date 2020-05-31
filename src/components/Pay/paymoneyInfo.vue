<template>
  <div>
    <loading v-if="loadingShow" />
    <div class="paymoney_info" v-if="!loadingShow">
      <div v-if="!showKeyboard">
        <h2>请检查您的机票信息</h2>
        <h4>出发到达城市:</h4>
        <van-row>
          <van-col span="8" class="dep_city">{{flightInfo.dep}}</van-col>
          <van-col span="8" class="city_middle">------------------➤</van-col>
          <van-col span="8" class="arr_city">{{flightInfo.arr}}</van-col>
        </van-row>
        <h3>出发时间:</h3>
        <van-row class="dep_date">{{flightInfo.depDate}}</van-row>
        <h3>出行人员机票信息</h3>
        <van-row class="person" v-for="(item,index) in flightInfo.person" :key="index">
          <van-col span="12">
            <div style="margin-bottom:5px;">姓名</div>
            <div style="font-size:20.002px">{{item.name}}</div>
          </van-col>
          <van-col span="12">
            <div style="margin-bottom:5px;">身份证</div>
            <div style="font-size:20.002px">{{item.card.substring(0,4) + 'xxxxxxx'}}</div>
          </van-col>
        </van-row>

        <div class="submit_pay">
          <van-button
            :loading="loadingText"
            loading-text="正在支付..."
            round
            type="primary"
            block
            @click="paySubmit"
          >立即支付</van-button>
        </div>
      </div>

      <div class="Keyboard" v-if="showKeyboard">
        <van-password-input :value="value" :focused="showKeyboard" @focus="showKeyboard = true" />
        <van-number-keyboard
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="() => {showKeyboard = false , value = ''}" 
        />
      </div>
    </div>
   
  </div>
</template>

<script>
import loading from "../../components/common/loading";
export default {
  data() {
    return {
      loadingText: false,
      value: "",
      showKeyboard: false,
      loadingShow:true
    };
  },
  props: ["flightInfo"],
  components: {
    loading
  },
  methods: {
    paySubmit() {
      this.loadingText = true;
      setTimeout(() => {
        this.loadingText = false;
        this.showKeyboard = true;
      }, 2000);
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length == 6 && this.value != '112233') {
          this.$msg.fail('密码错误')
          return
      }
      if(this.value.length == 6 && this.value == '112233') {
          this.$msg.fail('支付成功')
          return
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  },
  mounted() {
      setTimeout(() => {
          this.loadingShow = false
      },1000)
  }
};
</script>

<style scoped lang="less">
.paymoney_info {
  text-align: center;
  h2 {
    margin-top: 13.889vw;
    font-size: 5vw;
  }
  h4 {
    padding: 10px 0 0 0;
    color: #1989fa;
  }
  .dep_city {
    font-size: 5.556vw;
  }
  .arr_city {
    font-size: 5.556vw;
  }
  .city_middle {
    color: #555;
  }
  h3 {
    color: #1989fa;
    padding: 5vw 0 2.222vw 0;
  }
  .dep_date {
    font-size: 6.389vw;
  }
  .person {
    padding: 2.222vw 0;
    margin: 0.833vw 0;
    border: 0.278vw solid #ccc;
  }
  .submit_pay {
    padding: 0 2.778vw;
    margin: 8.333vw 0;
  }
  .Keyboard {
    margin-top: 5.556vw;
  }
}
</style>