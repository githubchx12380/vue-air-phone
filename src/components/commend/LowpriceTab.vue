<template>
  <div class="low-tab">
      <div class="low-tab-item" 
      :style="[
      {background:'url('+baseurl +item.vacation_backimg+')'},styleObj]"
      @click="LowPricehandle(item.vacation_id)"
    
      v-for="(item,index) in vacationTabList"
      :key="index">
          <p>{{item.vacation_title}}</p>
          <span>{{item.vacation_dest}}</span>
      </div>
  </div>
</template>

<script>
import request from '@/http/request'
export default {
    data() {
      return {
        styleObj:{
             backgroundSize: `40px 30px`,
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'right bottom'
        },
        vacationId:null
      }
    },
    props:['vacationTabList'],
    computed:{
      baseurl() {
        return request.defaults.baseURL + '/'
      }
    },
    methods:{
      LowPricehandle(id) {
         this.$store.dispatch('filtervaca/UPDATE_TAB_ID',id)
      }
    },
    watch:{
      vacationTabList() {
        //vuex存储当前假期出行id
        this.vacationId = this.vacationTabList[0].vacation_id
        this.$store.commit('filtervaca/vacationId',this.vacationId)
      }
    }
    
}
</script>

<style scoped lang="less">
@import '~@/assets/css/common.less';
.low-tab{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  .low-tab-item{
    width: 32%;
    background-color: red;
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16);
    background-color: @back-color;
    padding: 8px;
    p{
      font-weight: 600;
      font-size: 16px;
    }
    span{
      font-size: 9px;
    }
  }
}

</style>