<template>
  <div>
    <van-nav-bar :title="deparr" left-text="返回" left-arrow @click-left="$router.back()" />
    <van-notice-bar color="#1989fa" background="#ecf9ff">航班临近起飞，请先到值机柜台确认可值机后再预订。因误机产生的损失需自行承担。</van-notice-bar>

    <pay-info1 :airInfo="flightInfo"></pay-info1>

    <pay-info2 :airInfo="flightInfo"></pay-info2>
  </div>
</template>

<script>
import { select_air } from "@/api/Air_info.js";
import payInfo1 from '@/components/Pay/Payinfo_1.vue'
import payInfo2 from '@/components/Pay/Pauinfo_2'
export default {
  components:{
    payInfo1,
    payInfo2
  },
  data() {
    return {
      flightInfo: {}
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
    });
  },
};
</script>

