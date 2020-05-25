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
          <van-card
          v-for="(item,index) in $store.state.cart.flight_pay"
          :key="index"
          :num="item.person.length"
          :price="item.allprice + '.00'"
          :desc="'出发时间:' + item.depDate + ',' + ' 共' + item.person.length + '人'"
          :title="item.dep +  '→' + item.arr"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag plain type="danger" v-if="item.result.indexOf('9') != -1">已购货运险</van-tag>
            <van-tag plain type="danger" v-if="item.result.indexOf('28') != -1">已购机身险</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" type="danger" @click="deleteCartItem(index)">删除</van-button>
            <van-button size="mini" type="primary">付款</van-button>
          </template>
        </van-card>
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