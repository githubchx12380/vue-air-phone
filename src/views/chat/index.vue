<template>
  <div class="chat">
    <van-nav-bar title="阿杰" right-text="按钮" fixed @click-left="$router.back()">
      <van-icon size="20" color="black" slot="left" name="arrow-left" />
      <van-icon size="20" color="black" slot="right" name="ellipsis" />
    </van-nav-bar>

      <van-pull-refresh class="refresh" v-model="isLoading" @refresh="onRefresh">
        <div class="chat_br">
          <img src="../../assets/img/head_img.png" alt />
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <div class="chat_zi">
          <div class="chat_main">
            <p class="name">李某</p>
            <p class="content">你说什么呢我来个擦水水</p>
          </div>
          <img src="../../assets/img/head_img.png" alt />
        </div>
      </van-pull-refresh>

    <div class="char_bom">
      <div>
        <van-icon class="icons" name="smile-o" />
        <van-icon class="icons" name="add-o" /> 
      </div>
      <van-field  class="vant_field" v-model="value"  placeholder="请输入内容" />
      <van-button size="small" color="linear-gradient(to right, #4bb0ff, #6149f6)"
        >发送</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: true
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
        console.log(11);
      }, 1000);
    }
  }
};
</script>

<style scoped lang="less">
.chat {
  .van-nav-bar {
    border-bottom: 1px solid #eee;
  }
   .refresh {
    overflow: auto;
    margin:46px 0 50px 0;
    padding: 10px;
    height: calc(100vh - 46px - 52px);
      .chat_br {
        margin-bottom: 15px;
        display: flex;
        img {
          margin-right: 10px;
          width: 40px;
          height: 40px;
        }
        .chat_main {
          padding-right: 60px;
          flex: 1;
          .name {
            font-family: sans-serif;
            color: #555;
            font-size: 15px;
            margin-bottom: 5px;
          }
          .content {
            display: inline-block;
            background-color: #1a90ea;
            color: white;
            border-radius: 12px;
            padding: 10px;
            font-family: sans-serif;
          }
        }
      }
      .chat_zi {
        display: flex;
         margin-bottom: 15px;
        img {
          margin-left: 10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .chat_main {
          flex: 1;
          padding-left: 60px;
          text-align: right;
          .name {
            font-family: sans-serif;
            color: #555;
            font-size: 15px;
            margin-bottom: 5px;
          }
          .content {
            display: inline-block;
            background-color: #1a90ea;
            color: white;
            border-radius: 12px;
            padding: 10px;
            font-family: sans-serif;
          }
        }
      }
    }
  .char_bom{
    background-color: white;
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 50px;
    border-top: 1px solid #eee;
    align-items: center;
    padding: 0 10px;
     >div{
      height: 100%;
      display: flex;
      align-items: center;
    }
    .icons{
      font-size: 32px;
      &:nth-child(1) {
        margin-right: 8px;
      }
    }
    .vant_field{
      padding: 0;
      padding: 0 10px;
      /deep/ .van-cell__value{
        border:1px solid #ddd;
        padding: 3px 0;
        border-radius: 5px;
        .van-field__control{
          padding: 0 10px;
        }
      }
    }
  }
}
</style>