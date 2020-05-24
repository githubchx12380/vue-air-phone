<template>
  <div class="person-pay">
      <van-cell-group style="margin-bottom:5px;" v-for="(item,index) in person" :key="index">
        <van-field label="乘机人" @click-left-icon="addPerson" @click-right-icon="delPerson(index)" left-icon="add-o" right-icon="close" readonly></van-field>
        <van-field label="姓名"  v-model="item.name" placeholder="与乘机证件一致" />
        <van-field label="身份证" v-model="item.card" maxlength="18" value="" placeholder="请填写证件号码" />
      </van-cell-group>

      <van-cell-group style="margin-top:25px;">
        <van-field label="联系人" left-icon="friends-o" readonly></van-field>
        <van-field label="姓名"  placeholder="接收机票联系人" />
        <van-field label="手机号" placeholder="接收机票手机" >
            <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
            </template> 
        </van-field>
      </van-cell-group>

      <van-submit-bar :price="3050" button-text="提交订单"  color="#be99ff" @submit="onSubmit" />

      <van-checkbox-group v-model="result" class="check" direction="horizontal">
        <van-checkbox name="a">承运人对所运货物的责任险</van-checkbox>
        <van-checkbox name="b">机身险</van-checkbox>
      </van-checkbox-group>
  </div>
</template>

<script>
export default {
    props:['flightInfo'],
    data() {
        return {
            person:[{}],
            result:[]
        }
    },
    methods:{
        addPerson() {
            this.person.push({})
        },
        delPerson(index) {
            if(this.person.length == 1) {
                this.$msg.fail('最少保留一张车票')
                return
            }
            this.person.splice(index,1)
        },
        onSubmit() {

        }
    }
}
</script>

<style scoped lang="less">
.person-pay{
    margin: 20px 0;
}
.check{
    margin: 4.167vw 0;
    padding: 3.389vw 2.778vw;
    background-color: white;
}
</style>