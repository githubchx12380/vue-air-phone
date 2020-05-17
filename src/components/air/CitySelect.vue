<template>
  <div class="city-select">
    <div>
       <div class="city" @click="showPickerclick('dep')">{{dep}}</div>
       <div><van-icon class="cityico" name="replay" /></div>
       <div class="city" @click="showPickerclick('arr')">{{arr}}</div>
    </div>


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
export default {
  data() {
    return {
        temp:0,
        dep:'北京',
        arr:'上海',
        showPicker:false,
        value: '',
        columns:null
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
    onConfirm(value) {
      if(!this.temp) {
        this.dep = value.text
      }else{
        this.arr = value.text
      }
      this.showPicker = false
    } 
  },
  mounted() {
    citylist().then(res => {
      console.log(res);
      
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