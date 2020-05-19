<template>
  <div class="city-select">
    <div>
       <div class="city animate__animated" @click="showPickerclick('dep')" :class="{animate__fadeOutRight:falg}">{{model.dep}}</div>
        <div @click="exchange">
              <van-icon  class="cityico animate__animated" name="replay" :class="{animate__wobble:falg}" />
        </div>
       <div class="city animate__animated" @click="showPickerclick('arr')" :class="{animate__fadeOutLeft:falg}">{{model.arr}}</div>
    </div>
    <city-date @depDateChange="res => model.depDate = res" />

    <city-position @cabinPostion="res => model.cabinType = res" />
      
    <van-button 
        :loading="loading"
        :block="true"
        :round="true" 
        @click="orderSubmit"
        color="linear-gradient(to right, #05e4db, #00bee1)"
    >搜索</van-button>

    <div class="city-cart"><van-icon class="comment-o" name="comment-o" />我的订单</div>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>


  </div>
</template>

<script>
import { citylist } from '@/api/city.js'
import CityDate from './CityDate'
import CityPosition from './CityPosition'
import {mapGetters} from 'vuex'
export default {
  components:{
    CityDate,  //出发时间
    CityPosition //舱位
  },
  data() {
    return {
        falg:false, //切换城市控制控制变量
        temp:0,     //tab切换
        showPicker:false, //选择城市
        columns:null,  //城市列表
        show:false, // 控制日期显示
        loading:false, //按钮等待
        model:{
          dep:'北京', //默认出发
          depAirprotCode:'CAN',
          arr:'上海', //默认到达
          arrAirprotCode:'SHA',
          depDate:'', //出发时间
          cabinType:0, //舱位
        }
    }
  },
  methods:{
    showPickerclick(bar) {
        if(bar == 'dep') {
          this.temp = 0 
        }else{
          this.temp = 1
        }
        this.showPicker = true
    },
    //选择城市确认
    onConfirm(value) {
      if(!this.temp) {
        this.model.dep = value.text
        this.$store.dispatch('filtervaca/UPDATE_DEP',value.citycode)
      }else{
        this.model.arr = value.text
      }
      this.showPicker = false
    },
    
    //控制动画
    exchange() {
      this.falg = true
    },
    //切换城市
    exchangeCity() {
      let dep = this.model.dep
      let arr = this.model.arr
      this.model.dep = arr
      this.model.arr = dep
    },
    //订单提交
    orderSubmit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push('/cart')
      },1500)
    }
  },
  watch:{
    falg() {
      //动画
      if(this.falg) {
        setTimeout(() => {
          this.falg = false
          this.exchangeCity()
        },800)
      }
    }
  },
  mounted() {
    citylist().then(res => {
      this.columns = res.data.data.map(item => {
        return {
          text:item.city,
          citycode:item.citycode,
        }
      })
      
      this.$store.commit('filtervaca/originDep',this.model.depAirprotCode)
      this.columns.push({text:'暂无其他城市机票',disabled: true})
    })
  }
}
</script>

<style scoped lang="less">
.city-select{
  padding: 5.944vw 5.556vw 3vw 5.556vw;
   >div:nth-child(1) {
     display: flex;
     justify-content: space-between;
   }
  .cityico{
    font-size: 9.722vw;
    color: #00bcd4;
  }
  .city{
    display: flex;
    align-items: center;
    font-size: 6.889vw;
    font-weight: 700;
  }
  /deep/ .van-button--default{
    margin: 6.944vw 0;
    .van-button__text{
      font-size: 5.5vw;
      font-weight: 700;
    }
  }
  .city-cart{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9E9E9E;
    font-size: 3.933vw;
    .comment-o{
      font-size: 4.944vw;
      padding: 0.878vw 1vw 0 1.667vw;
    }
  }
  
}
</style>