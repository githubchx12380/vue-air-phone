<template>
  <div class="cart">
    <van-nav-bar
      style="margin-bottom:2.778vw;"
      title="订单"
      right-text="登录"
      @click-right="$router.back()"
    />

    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/deep/ .van-card {
  background-color: white;
  border-bottom: 1px solid #ddd;
  .van-card__desc {
    margin: 5px 0 2px 0;
  }
}
</style>