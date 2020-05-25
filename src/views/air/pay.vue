<template>
  <div class="pay">
    <van-nav-bar :title="deparr" left-text="返回" left-arrow @click-left="$router.back()" />

    <div v-if="loadingShow"><loading /></div>
    <div v-if="!loadingShow">
      <van-notice-bar color="#1989fa" background="#ecf9ff">航班临近起飞，请先到值机柜台确认可值机后再预订。因误机产生的损失需自行承担。</van-notice-bar>

      <pay-info1 :airInfo="flightInfo"></pay-info1>

      <pay-info2 :airInfo="flightInfo"></pay-info2>

      <pay-info3-person :airInfo="flightInfo"></pay-info3-person>
    </div>
  </div>
</template>

<script>
import { select_air } from "@/api/Air_info.js";
import payInfo1 from '@/components/Pay/Payinfo_1.vue'
import payInfo2 from '@/components/Pay/Pauinfo_2'
import payInfo3Person from '@/components/Pay/Payinfo_3_person'
import loading from '@/components/common/loading.vue'
export default {
  components:{
    payInfo1,
    payInfo2,
    payInfo3Person,
    loading
  },
  data() {
    return {
      flightInfo: {},
      loadingShow:true,
    };
  },
  computed:{
    //出发城市
    deparr() {
      return this.$route.query.dep + "→" + this.$route.query.arr;
    },
  },
  mounted() {
    select_air(this.$route.params.id).then(res => {
      this.flightInfo = res.data.data[0];
      setTimeout(() => {
        this.loadingShow = false
      },500)
    });
  },
};
</script>

<style scoped lang="less">
.pay{
  background-color: white;
}
</style>

