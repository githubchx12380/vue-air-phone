<template>
  <div>
      <van-nav-bar
        title="我的订单"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
      />
      <van-tabs v-model="active" color="#1989fa">
        <van-tab title="全部"></van-tab>
        <van-tab title="待支付"></van-tab>
        <van-tab title="已支付"></van-tab>
        <van-tab title="退款单"></van-tab>
      </van-tabs>
      <loading v-if="loadingShow" />
      <div v-if="!loadingShow">
          
      </div>
      
  </div>
</template>

<script>
import loading from '@/components/common/loading.vue'
export default {
  data() {
    return {
      loadingShow:true,
      active:0
    }
  },
  components:{
    loading
  },
  mounted() {
    setTimeout(() => {
      this.loadingShow = false
    },500)
  },
  watch:{
    active() {
      this.loadingShow = true
      setTimeout(() => {
         this.loadingShow = false
      },500)
    }
  }
}
</script>

<style>

</style>