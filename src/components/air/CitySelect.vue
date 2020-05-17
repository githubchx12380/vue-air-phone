<template>
  <div class="city-select">
    <div>
       <div class="city animate__animated" @click="showPickerclick('dep')" :class="{animate__fadeOutRight:falg}">{{dep}}</div>
        <div @click="exchange">
              <van-icon  class="cityico animate__animated" name="replay" :class="{animate__wobble:falg}" />
        </div>
       <div class="city animate__animated" @click="showPickerclick('arr')" :class="{animate__fadeOutLeft:falg}">{{arr}}</div>
    </div>
    <city-date />

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>

      
    <van-calendar v-model="show" :round="false" position="right" />
  </div>
</template>

<script>
import { citylist } from '@/api/city.js'
import CityDate from './CityDate'
export default {
  components:{
    CityDate
  },
  data() {
    return {
        falg:false, //切换城市控制控制变量
        temp:0,     //tab切换
        dep:'北京', //默认出发
        arr:'上海', //默认到达
        showPicker:false, //选择城市
        columns:null,  //城市列表
        show:false, // 控制日期显示
    }
  },
  methods:{
    showPickerclick(bar) {
        if(bar == 'dep') {
          this.temp = 0 
        }else{
          this.temp = 1
        }
      
    },
    //选择城市确认
    onConfirm(value) {
      if(!this.temp) {
        this.dep = value.text
      }else{
        this.arr = value.text
      }
      this.showPicker = false
    },
    //控制动画
    exchange() {
      this.falg = true
    },
    //切换城市
    exchangeCity() {
      let dep = this.dep
      let arr = this.arr
      this.dep = arr
      this.arr = dep
    } 
  },
  watch:{
    falg() {
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
      this.columns.push({text:'暂无其他城市机票',disabled: true})
    })
  }
}
</script>

<style scoped lang="less">
.city-select{
  padding: 6.944vw 5.556vw;
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
}
</style>