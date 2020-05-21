<template>
  <div>
    <van-row class="ticket-item">
      <van-col class="item-info" span="18">
          <van-row>
              <van-col span="7" class="depDate">
                  <div class="date">22:35</div>
                  <div class="place">白云T2</div>
                  <div></div>
              </van-col>
              <van-col span="10" class="needDate">
                  <p>11时40分</p>
                  <p>-----------------</p>
                  <p>湖北</p>
              </van-col>
              <van-col span="7" class="arrDate">
                  <p class="date">10:15</p>
                  <p class="place">浦东T1</p>
              </van-col>
          </van-row>
          <div class="hangban">南航CZ3896东航MU9300</div>
      </van-col>
      <van-col class="item-price" span="6">
          <p>¥ 380</p>
          <span>经济舱1.7折</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
    mounted() {

    }
}
</script>

<style scoped lang="less">
.ticket-item{
    background-color:#fff;
    display: flex;
    padding: 4.167vw 4.167vw;
    border-bottom: 1px solid #eee;
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
            margin: 2.778vw 0.556vw 0 0.556vw;
            font-size: 3.333vw;
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