<template>
  <div class="cart">
    <van-nav-bar
      style="margin-bottom:2.778vw;"
      title="订单"
      right-text="登录"
      @click-right="$router.back()"
    />
    
    <loading v-if="loadingShow" />
    <div  v-if="!loadingShow">
      <van-card
        v-for="(item,index) in $store.state.cart.flight_pay"
        :key="index"
        :num="item.person.length"
        :price="item.allprice + '.00'"
        :desc="'出发时间:' + item.depDate"
        :title="item.dep +  '→' + item.arr"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger" v-if="item.result.indexOf('9') != -1">已购货运险</van-tag>
          <van-tag plain type="danger" v-if="item.result.indexOf('28') != -1">已购机身险</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" type="danger">删除</van-button>
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
      loadingShow:true
    }
  },
  components:{
    loading
  },
  mounted() {
    setTimeout(() => {
      this.loadingShow = false
    },500)
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-card {
  background-color: white;
  border-bottom: 0.278vw solid #ddd;
  .van-card__desc {
    font-size: 3.333vw;
    margin: 1.389vw 0 0.556vw 0;
  }
}
</style>