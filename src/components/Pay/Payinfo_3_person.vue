<template>
  <div class="person-pay">
      <van-cell-group style="margin-bottom:1.389vw;" v-for="(item,index) in model.person" :key="index">
        <van-field label="乘机人" @click-left-icon="addPerson" @click-right-icon="delPerson(index)" left-icon="add-o" right-icon="close" readonly></van-field>
        <van-field label="姓名"  v-model="item.name" placeholder="与乘机证件一致" />
        <van-field label="身份证" v-model="item.card" maxlength="18" value="" placeholder="请填写证件号码" />
      </van-cell-group>

      <van-cell-group style="margin-top:6.944vw;">
        <van-field label="联系人" left-icon="friends-o" readonly></van-field>
        <van-field label="姓名" v-model="model.getFlight"  placeholder="接收机票联系人" />
        <van-field label="手机号" v-model="model.getPhone" placeholder="接收机票手机" >
            <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
            </template> 
        </van-field>
      </van-cell-group>

      <van-submit-bar  :price="model.allprice * 100" button-text="提交订单"  color="#be99ff" @submit="onSubmit" >
          <van-goods-action-icon icon="cart-o" text="购物车" />
      </van-submit-bar>

      <van-checkbox-group v-model="model.result" class="check" direction="horizontal">
        <van-checkbox name="9">货物险 / 单张9元</van-checkbox>
        <van-checkbox name="28">机身险 / 单张28元</van-checkbox>
      </van-checkbox-group>
      <div style="display:none">{{handleAllprice}}</div>
  </div>
</template>

<script>
export default {
    props:['airInfo'],
    data() {
        return {
            model:{
                allprice:null,
                person:[{}],
                result:[]
            }
        }
    },
    methods:{
        addPerson() {
            this.model.person.push({})
        },
        delPerson(index) {
            if(this.model.person.length == 1) {
                this.$msg.fail('最少保留一张车票')
                return
            }
            this.model.person.splice(index,1)
        },
        onSubmit() {
            if(!localStorage.getItem('token')){
                this.$msg.fail('已为您添加至我的订单,请登录后结算')
                this.model.air_ticket_id = this.airInfo.air_ticket_id
                this.$store.commit('cart/ADD_CART',{...this.model})
                this.$router.push('/air/cart')
            }
        }
    },
    computed:{
        handleAllprice() {
             let price = this.model.person.length * this.airInfo.price
            this.model.result.forEach(item => {
                if(!item) {
                    item = 0
                }
                price += Number(item) * this.model.person.length
            })
            this.model.allprice = price
            return 1
        },
    },
}
</script>

<style scoped lang="less">
.model.person-pay{
    margin: 20px 0;
}
.check{
    margin: 5vw 0 10.167vw 0;
    padding: 3.389vw 2.778vw;
    background-color: white;
}
</style>