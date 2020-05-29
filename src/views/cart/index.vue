<template>
  <div class="cart">
    <van-nav-bar
      class="nav-bar"
      style="margin-bottom:2.778vw;"
      title="订单"
      :right-text="orderLogin"
      @click-right="pathLogin"
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
          <van-button size="mini" type="danger" @click="deleteCartItem(index,item.buy_date)">删除</van-button>
          <van-button size="mini" type="primary" @click="handleOrderprice(item.order_id)">付款</van-button>
        </template>
      </van-card>
    </div>
    
    
  </div>
</template>

<script>
import loading from '@/components/common/loading.vue'
import { buy_stateOrder } from '@/api/order.js'
import { del_order} from '@/api/order.js'
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
    //已登录用户渲染数据库订单未登录渲染本地存储
    orderCate() {
      return localStorage.getItem('token') ? this.orderResult : this.$store.state.cart.flight_pay
    },
    //已登录用户隐藏登录按钮,未登录显示登录按钮
    orderLogin() {
      return localStorage.getItem('token') ? null : '登录'
    }
  },
  methods:{
    pathLogin() {
      if(!localStorage.getItem('token')) {
        this.$router.push('/login')
      }
    },
    //付款
    handleOrderprice(id) {
      if(!localStorage.getItem('token')) {
        this.$msg.fail('请先登录')
        return
      }
      this.$router.push({
        path:'/paymoney',
        query:{
          id:id,
        }
      })
      
    },
    //删除购物车商品
    deleteCartItem(index,buy_date) {
      this.$store.dispatch('cart/DEL_CART',index)
      //判断有无登录,有登录的话,也要删除数据库订单
      if(localStorage.getItem('token')) {
        del_order({
          buy_date:buy_date,
          id:localStorage.getItem('userId')
        }).then(res => {
          if(res.data.data.success) {
            this.$msg.success('删除成功')
            this.handleOrderInit()
          }
        })
      }
    },
    //获取未支付订单
    handleOrderInit() {
      //如果登录状态,就取数据库数据,否则取本地存储数据
      if(localStorage.getItem('token')) {
         setTimeout(() => {
            buy_stateOrder({
            buy_state:1,
            id:localStorage.getItem('userId')
          }).then(res => {
            this.orderResult = [...res.data.data]
            this.$route.meta.count = this.orderResult.length
          })
         },500)
        }
    }
  },
  mounted() {
    //进入页面loading动画
    setTimeout(() => {
      this.loadingShow = false
    },500)
    this.handleOrderInit()
  }
};
</script>

<style lang="less" scoped>
.nav-bar{
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
}
.cart{
  margin-bottom: 19.444vw;
}
/deep/ .van-card {
  background-color: white;
  border-bottom: 0.278vw solid #ddd;
  .van-card__desc {
    font-size: 3.333vw;
    margin: 1.389vw 0 0.556vw 0;
  }
}
</style>