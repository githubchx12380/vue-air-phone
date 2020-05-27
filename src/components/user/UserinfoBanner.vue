<template>
  <div class="userinfo-banner" :class="{active:icos}" @click="UpdateInfoHandle">
      <div>{{left}}</div>
      <div>
          <span>
              {{info}}
              <slot name="right" />
          </span>
          <van-icon v-show="!icos" name="arrow" />
      </div>
  </div>
</template>

<script>
export default {
    props:['left','info','icos'],
    methods:{
        UpdateInfoHandle() {
            this.$emit('UpdateInfoHandle')
        }
    }
}
</script>

<style scoped lang="less">

.userinfo-banner{
    background-color: white;
    padding: 3.333vw 3.333vw;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    div:nth-child(1) {
        font-size: 4.722vw;
    }
    div:nth-child(2) {
        display: flex;
        align-items: center;
        
        span{
            color: rgb(191, 191, 191);
            font-size: 3.333vw;
            img{
                width: 15.278vw;
                height: 15.278vw;
                border-radius: 50%;
            }
        }
        i{
            margin-left: 1.389vw;
            font-size: 3.333vw;
            color: #999;
        }
    }
}
.active{
    padding-right: 20px;
}
</style>