<template>
  <div class="chat">
    <van-nav-bar title="阿杰" right-text="按钮" fixed @click-left="$router.back()">
      <van-icon size="20" color="black" slot="left" name="arrow-left" />
      <van-icon size="20" color="black" slot="right" name="ellipsis" />
    </van-nav-bar>

      <van-pull-refresh ref="refresh" class="refresh" v-model="isLoading" @refresh="onRefresh">
        <div ref="ref_chatbox" v-for="(item,index) in $store.state.chat.list" :key="index">
          <div class="chat_zi" v-if="item.webuser_id == userId ">
            <div class="chat_main">
              <p class="name">{{item.name || '暂无'}}</p>
              <p class="content">{{item.value}}</p>
            </div>
            <img v-if="item.head_img" :src="baseUrl + item.head_img" alt />
            <img v-else src="../../assets/img/head_img.png"  alt />
          </div>
            <div class="chat_br" v-else>
             <img v-if="item.head_img" :src="baseUrl + item.head_img" alt />
             <img v-else src="../../assets/img/head_img.png"  alt />
            <div class="chat_main">
               <p class="name">{{item.name || '暂无'}}</p>
                <p class="content">{{item.value}}</p>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    <div class="char_bom">
      <div>
        <van-icon class="icons" name="smile-o" />
        <van-icon class="icons" name="add-o" /> 
      </div>
      <van-field  class="vant_field" v-model="value"  placeholder="请输入内容" />
      <van-button 
      @click="emitValue"
      size="small" 
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
        >发送</van-button
      >
    </div>
  </div>
</template>

<script>
import { now,line,emitContent,fn } from './socket'
import request from '../../http/request'
export default {
  data() {
    return {
      count: 0,
      isLoading: true,
      value:'',
      list:[],
    };
  },
  computed:{
    userId() {
      return localStorage.getItem('userId')
    },
    baseUrl() {
      return request.defaults.baseURL
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    emitValue() {
      emitContent(this.value)
      this.value = ''
      setTimeout(() => {
        this.$refs.ref_chatbox && this.$refs.ref_chatbox.pop().scrollIntoView(false)
      })
    },
    
  },
  mounted() {
    this.$refs.ref_chatbox && this.$refs.ref_chatbox.pop().scrollIntoView(false)
    now()
  },
  beforeDestroy() {
    line()
  },
  
 
};
</script>

<style scoped lang="less">
.chat {
  .van-nav-bar {
    border-bottom: 0.278vw solid #eee;
  }
   .refresh {
    margin:12.778vw 0 12.778vw 0;
    padding: 2.778vw;
    overflow:auto;
    height: calc(100vh - 12.778vw - 13.889vw);
      .chat_br {
        margin-bottom: 4.167vw;
        display: flex;
        img {
          margin-right: 2.778vw;
          width: 11.111vw;
          height: 11.111vw;
        }
        .chat_main {
          padding-right: 16.667vw;
          flex: 1;
          .name {
            font-family: sans-serif;
            color: #555;
            font-size: 4.167vw;
            margin-bottom: 1.389vw;
          }
          .content {
            display: inline-block;
            background-color: #1a90ea;
            color: white;
            border-radius: 3.333vw;
            padding: 2.778vw;
            font-family: sans-serif;
          }
        }
      }
      .chat_zi {
        display: flex;
         margin-bottom: 4.167vw;
        img {
          margin-left: 2.778vw;
          width: 11.111vw;
          height: 11.111vw;
          border-radius: 50%;
        }
        .chat_main {
          flex: 1;
          padding-left: 16.667vw;
          text-align: right;
          .name {
            font-family: sans-serif;
            color: #555;
            font-size: 4.167vw;
            margin-bottom: 1.389vw;
          }
          .content {
            display: inline-block;
            background-color: #1a90ea;
            color: white;
            border-radius: 3.333vw;
            padding: 2.778vw;
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
    border-top: 0.278vw solid #eee;
    align-items: center;
    padding: 2.778vw 2.778vw;
     >div{
      height: 100%;
      display: flex;
      align-items: center;
    }
    .icons{
      font-size: 8.889vw;
      &:nth-child(1) {
        margin-right: 2.222vw;
      }
    }
    .vant_field{
      padding: 0;
      padding: 0 2.778vw;
      /deep/ .van-cell__value{
        border:0.278vw solid #ddd;
        padding: 0.833vw 0;
        border-radius: 1.389vw;
        .van-field__control{
          padding: 0 2.778vw;
        }
      }
    }
  }
}
</style>