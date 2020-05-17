<template>
  <div class="city-date-box">
      <div class="city-date">05月21日 周四</div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        nowdate:''
      }
    },
    methods:{
      initDate() {
        
      }
    },
    created() {
      this.initDate() //获取当前时间
    }
}
</script>

<style>
.city-date-box{
  padding: 20px 0;
}
.city-date{
  font-size: 18px;
}
</style>