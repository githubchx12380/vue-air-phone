<template>
  <div class="person-pay">
      <van-cell-group style="margin-bottom:5px;" v-for="(item,index) in person" :key="index">
        <van-field label="乘机人" class-prefix="add-o"  readonly  @click="addFlight" />
        <van-field label="姓名"   value="" placeholder="与乘机证件一致" />
        <van-field label="身份证" value="" placeholder="请填写证件号码" />
      </van-cell-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            person:[{}]
        }
    },
    methods:{
        addFlight() {
            this.person.push({})
        }
    }
}
</script>

<style scoped lang="less">
.person-pay{
    margin: 20px 0;
}
</style>