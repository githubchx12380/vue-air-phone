<template>
  <div class="cell-item">
      <van-cell :title="title">
            <template #icon>
                <van-icon :style="{backgroundColor:backcolor}" class="left-icos" :name="icos" style="line-height: inherit;" />
            </template>
            <template #right-icon>
                <van-icon name="arrow" style="line-height: inherit;" />
            </template>
      </van-cell>
  </div>
</template>

<script>
export default {
    props:['icos','backcolor','title']
}
</script>

<style scoped lang="less">
.cell-item{
    display: flex;
    border-bottom: 1px solid #eee;
    .left-icos{
         margin-right: 2.778vw;
         font-size: 5.556vw;
        
         color: white;
         padding: 0.633vw 1vw;
         border-radius: 2.778vw;
    }
    /deep/ .van-cell__title{
        display: flex;
        align-items: center;
        span{
            font-size: 4.722vw;
        }
    }
    /deep/ .van-icon-arrow{
        display: flex;
        align-items: center;
    }
}
</style>