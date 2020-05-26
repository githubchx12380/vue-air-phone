<template>
  <div>
      <div class="mymoney">
          <h2>
              <van-icon class="money-ico" name="balance-o" />
              <div>我的钱包</div>
          </h2>
          <van-row class="money-info">
              <van-col class="money-info-item" span="8">
                  <span class="numbers" v-if="userinfo">{{userinfo.money + '.00'}}</span>
                  <span class="numbers" v-else>0.00</span>
                  <span class="text">账户余额</span>
              </van-col>
              <van-col class="money-info-item" span="8">
                  <span class="numbers">0</span>
                  <span class="text">星卷</span>
              </van-col>
              <van-col class="money-info-item" span="8">
                  <span class="numbers">0<em> 张</em></span>
                  <span class="text">银行卡</span>
              </van-col>
          </van-row>
      </div>
      <div class="order-item">
        <my-banner-item icos="balance-list-o" @click.native="$router.push('/myorder')" backcolor="#4fc3f7" title="我的订单" />

        <my-banner-item icos="cash-back-record" @click.native="$router.push('/quitorder')" backcolor="#ffa21f" title="我的退款" />

        <my-banner-item icos="records" backcolor="#ffa21f" title="我的发票" />
        
        <my-banner-item icos="debit-pay" backcolor="#ffa21f" title="我的攻略" />
      </div>

      <div class="fank">
        <my-banner-item icos="chat-o" backcolor="#90a4ae" title="意见反馈" />

        <my-banner-item icos="info-o" backcolor="#90a4ae" title="关于" />
      </div>
  </div>
</template>

<script>
import MyBannerItem from './MyBannerItem'
export default {
    props:['userinfo'],
    components:{
        MyBannerItem
    }
}
</script>

<style scoped lang="less">
.mymoney{
    padding: 2.778vw 2.778vw;
    background-color: white;
    h2{
         display: flex;
         align-items: center;
         font-weight: 400;
         padding: 0vw 1.389vw 2.778vw 1.389vw;
         border-bottom: 0.278vw solid #eee;
         .money-ico{
            margin-right: 2.778vw;
            font-size: 5.556vw;
            background-color: #ff7043;
            color: white;
            padding: 0.833vw 1.111vw 1.111vw 0.833vw;
            border-radius: 2.778vw;
         }
    }
    .money-info{
        padding: 5.556vw;
        .money-info-item{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .numbers{
                margin: 1.389vw 0;
                color: #222;
                em{
                    font-style: normal;
                    font-size: 2.778vw;
                }
            }
            .text{
                font-size: 3.889vw;
                color: #555;
            }
        }
    }
}
.order-item{
    background-color: white;
    margin-top: 4.167vw;
}
.fank{
    margin: 15px 0 50px 0;
}
</style>