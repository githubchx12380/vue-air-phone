<template>
  <div>
      <canvas ref="order_pay"></canvas>
  </div>
</template>

<script>
import { get_orderNo } from '@/api/order'
import QRcode from 'qrcode'
export default {
    mounted() {
        let obj = {
            user_id:localStorage.getItem('userId'),
            order_id:this.$route.query.id
        }
        get_orderNo(obj).then(res => {
            if(res.data.code == 301) {
                setTimeout(() => {
                    this.$router.replace('/')
                })
                return
            }
        let canvas = this.$refs.order_pay
        const qrcode = 'www.baidu.com'
        QRcode.toCanvas(canvas,qrcode,{
            width:200
        })
        })
    },
}
</script>

<style>

</style>