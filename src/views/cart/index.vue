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
        v-for="(item,index) in orderCate"
        :key="index"
        :num="item.person.length"
        :price="item.allprice + '.00'"
        :desc="'出发时间:' + item.depDate + ',' + ' 共' + item.person.length + '人'"
        :title="item.dep +  '→' + item.arr"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger" v-if="item.baoxian.indexOf('9') != -1">已购货运险</van-tag>
          <van-tag plain type="danger" v-if="item.baoxian.indexOf('28') != -1">已购机身险</van-tag>
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
import { get_orderinfo } from '@/api/order.js'
export default {
  data() {
    return {
      loadingShow:true,
      orderResult:[]
    }
  },
  components:{
    loading
  },
  computed:{
    orderCate() {
      return localStorage.getItem('token') ? this.orderResult : this.$store.state.cart.flight_pay
    }
  },
  methods:{
    //删除购物车商品
    deleteCartItem(index) {
      this.$store.dispatch('cart/DEL_CART',index)
    }
  },
  mounted() {
    //进入页面loading动画
    setTimeout(() => {
      this.loadingShow = false
    },500)

    //如果登录状态,就取数据库数据,否则取本地存储数据
    if(localStorage.getItem('token')) {
      get_orderinfo(localStorage.getItem('userId')).then(res => {
            this.orderResult = [...res.data.data]
      })
    }
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