<template>
  <div @click="handlecart">
    <van-row class="ticket-item">
      <van-col class="item-info" span="18">
          <van-row>
              <van-col span="7" class="depDate">
                  <div class="date">{{flightitem.depTime}}</div>
                  <div class="place">{{flightitem.depAirport.replace('机场','')}}{{flightitem.depTerminal}}</div>
                  <div></div>
              </van-col>
              <van-col span="10" class="needDate">
                  <p>{{flightitem.flightTime}}</p>
                  <p>-------------------------➤</p>
              </van-col>
              <van-col span="7" class="arrDate">
                  <p class="date">{{flightitem.arrTime}}</p>
                  <p class="place">{{flightitem.arrAirport.replace('机场','')}}{{flightitem.arrTerminal}}</p>
              </van-col>
          </van-row>
          <div class="hangban">{{flightitem.name}} {{flightitem.airCode}}</div>
      </van-col>
      <van-col class="item-price" span="6">
          <p>¥ {{flightitem.price}}</p>
          <span>{{cabinTypes}}{{flightitem.discountStr}}</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
    props:['flightitem'],
    computed:{
        cabinTypes() {
            if(this.$route.query.cabinType == 0 || this.$route.query.cabinType == 2) {
                return '经济舱'
            }else{
                return '头等舱'
            }
        }
    },
    methods:{
        handlecart() {
            this.$router.push({
                path:'/pay/' + this.flightitem.air_ticket_id,
                query:this.$route.query
            })
        }
    }
}
</script>

<style scoped lang="less">
.ticket-item{
    background-color:#fff;
    display: flex;
    padding: 4.167vw 4.167vw;
    border-bottom: 1px solid #ddd;
    .item-info{
        flex: 1;
        .depDate{
            .date{
                font-size: 5.278vw;
            }
            .place{
                margin-top: 0.833vw;
                color: #999;
                font-size: 3.333vw;
            }
        }
        .needDate{
            padding-top: 2.778vw;
            color: #999;
            
            text-align: center;
            p:nth-child(1) {
                font-size: 2.778vw;
            }
            p:nth-child(2) {
                font-size: 2.778vw;
            }
            p:nth-child(3) {
                font-size: 2.778vw;
            }
        }
        .arrDate{
            .date{
                text-align: center;
                font-size: 5.278vw;
            }
            .place{
                margin-top: 0.833vw;
                color: #999;
                font-size: 3.333vw;
                text-align: center;
            }
        }
        .hangban{
            margin: 10.001px 2.002px 0 0;
            font-size: 2.778vw;
            color: #999;
        }
    }
    .item-price{
        text-align: right;
        p{
            color: #ff8205;
            font-size: 6.111vw;
        }
        span{
             font-size: 3.333vw;
             color: #999;
        }
    }
    
}
</style>