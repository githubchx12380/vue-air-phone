<template>
  <div class="low-data">
      <div class="data-tab-item">
          <span>国内热门</span>
          <span>国内低价</span>
      </div>

        <div class="low-item-parent">
             <LowAirItem :LowAirItem="item" v-for="(item,index) in commendData" :key="index" />
        </div>
  </div>
</template>

<script>
import LowAirItem from './LowAirItem'
export default {
    components:{
        LowAirItem
    },
    computed:{
      commendData() {
        return this.$store.state.filtervaca.successAir.data
      },
    },
}
</script>

<style scoped lang="less">
.low-data{
    background-color: #02c0e0;
    .data-tab-item{
        display: flex;
        background-color: #02c0e0;
        padding: 2.778vw 2.778vw;
        justify-content: space-between;
        span{
            padding: 2.222vw 4.611vw;
            font-size: 4.944vw;
            width: 38%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-radius: 5.722vw;
        }
    }
}
.low-item-parent{
    padding: 0 2.778vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>