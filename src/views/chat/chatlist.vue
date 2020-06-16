<template>
  <div class="chat_list">
      <van-nav-bar title="聊天列表" right-text="按钮" fixed @click-left="$router.back()">
        <van-icon size="20" color="black" slot="left" name="arrow-left" />
        <van-icon size="20" color="black" slot="right" name="ellipsis" />
    </van-nav-bar>

    <div class="vant_cell">
        <van-swipe-cell>
            <van-cell :border="false" title="单元格" value="内容" />
            <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-cell :border="false" title="单元格" value="内容" />
            <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-cell :border="false" title="单元格" value="内容" />
            <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
            </template>
        </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.chat_list{
    background-color: #f7f8fa;
    height: calc(100vh - 46px);
    .vant_cell{
        margin-top: 45px;
        padding: 20px 0;
    }
}
</style>