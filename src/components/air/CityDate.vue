<template>
  <div class="city-date-box">
    <div  @click="showDate">
         <div class="city-date">{{initDate}} <span>{{dddate}}</span></div>
    </div>
    <van-calendar v-model="isshowdate"  :show-confirm="true" @confirm="confirmDate" :round="false" position="right" />
  </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
      return {
        isshowdate:false,
        newdate:'',
        dddate:'',
        datearr: [
          {d:1,t:'周一'},
          {d:2,t:'周二'},
          {d:3,t:'周三'},
          {d:4,t:'周四'},
          {d:5,t:'周五'},
          {d:6,t:'周六'},
          {d:0,t:'周日'},
        ]
      }
    },
    methods:{
      showDate() {
        this.isshowdate = true
      },
      confirmDate(val) {
        let result = moment(val).format('YYYY-MM-DD')
        this.newdate = result
        this.isshowdate = false
      },
      changeDateDD(dd) {
          this.datearr.forEach(item => {
            if(item.d == dd)
            this.dddate = item.t
          })
      }
    },
    computed:{
      initDate() {
        let rst = this.newdate.split('-')
        return rst[1] + '月' + rst[2] + '日'
      },
    },
    watch:{
      newdate() {
        let dd = moment(this.newdate).format('d'); 
        this.changeDateDD(dd)
        this.$emit('depDateChange',this.newdate)
      }
    },
    mounted() {
      let res = moment().format('YYYY-MM-DD')
      this.newdate = res
      let dd = moment().format('d'); 
      this.changeDateDD(dd)
      this.$emit('depDateChange',this.newdate)
    }
}
</script>

<style lang="less">
.city-date-box{
  padding: 9.556vw 0;
}
.city-date{
  font-size: 5.389vw;
  span{
    font-size: 4vw;
  }
}
</style>