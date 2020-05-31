<template>
  <div>
   <van-nav-bar
        class="nav-bar"
        title="支付订单"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
    />
    <van-notice-bar text="本项目纯属小打小闹,如购买真实机票,请认准各大机票网站!" left-icon="volume-o" />
    
    <paymoney-info></paymoney-info>
  </div>
</template>

<script>
import { get_orderNo } from '@/api/order'
import PaymoneyInfo from '@/components/Pay/paymoneyInfo'
export default {
    data() {
        return {
            flightInfo:{}
        }
    },
    components:{
        PaymoneyInfo
    },
    mounted() {
        let obj = {
            user_id:localStorage.getItem('userId'),
            order_id:this.$route.query.id
        }
        get_orderNo(obj).then(res => {
            console.log(res);
            
            if(res.data.code == 301) {
                setTimeout(() => {
                    this.$router.replace('/')
                })
                return
            }
            this.flightInfo = res.data.data[0]
        
        })
    },
}
</script>

<style>

</style>