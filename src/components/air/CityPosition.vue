<template>
  <div class="city-position-box">
    <div @click="show = true">
         <div class="city-date">{{PositionText}}</div>
    </div>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
      return {
        show:false,
        actions:[
          { name: '舱位不限',cabinType:0 },
          { name: '头等舱/商务舱',cabinType:1},
          { name: '经济舱',cabinType:2},
        ],
        cabinType:0,
        PositionText:'舱位不限'  
      }
    },
    methods:{
      onSelect(val) {
        this.PositionText = val.name
        this.$emit('cabinPostion',val.cabinType)  
        this.show = false
      }
    },
}
</script>

<style lang="less">

</style>