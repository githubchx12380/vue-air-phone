<template>
  <div class="myprofile-container">
    <nav-bar :leftico="true"></nav-bar>
    <div class="myprofile" v-if="!userinfo">
      <img class="back-img" src="@/assets/img/myprofile-back.jpg" alt />
      <div class="head_img">
        <div class="img">
          <img src="../../assets/img/head_img.png" alt />
        </div>
        <p>
          <span @click="$router.push('/login')">登录</span>
          <span @click="$router.push('register')">注册</span>
        </p>
      </div>
    </div>

    <div class="myprofile" v-if="userinfo">
      <img class="back-img" src="@/assets/img/myprofile-back.jpg" alt />
      <div class="head_img">
        <div class="img">
          <img v-if="userinfo.head_img" :src="userinfo.head_img" alt="">
          <img v-else src="@/assets/img/user_img.png" alt />
        </div>
        <p >
          <span @click="$router.push('/userinfo')">
            {{userinfo.name ? userinfo.name : '还没有名字'}}
          </span>
        </p>
      </div>
    </div>

    <MyBanner :userinfo="userinfo" />
  </div>
</template>

<script>
import NavBar from "@/components/air/NavBar.vue";
import MyBanner from "@/components/user/MyBanner.vue";
import loading from "@/components/common/loading.vue";
import { get_webuserinfo } from '@/api/user.js'
export default {
  data() {
    return {
      userinfo:null  
    }
  },
  components: {
    NavBar,
    MyBanner,
    loading
  },
  mounted() {
    if(localStorage.getItem('token')) {
      get_webuserinfo(localStorage.getItem('userId')).then(res => {
        this.userinfo = res.data.data[0]
      })
    }
  }
};
</script>

<style scoped lang="less">
.myprofile-container {
  background-color: #ebeced;
  padding-bottom: 41.667vw;
}
.myprofile {
  position: relative;
  height: 48.222vw;
  .back-img {
    position: absolute;
    top: -120vw;
    width: 100%;
  }
  .head_img {
    position: absolute;
    z-index: 1;
    left: 50%;
    margin-left: -10.278vw;
    height: 26.389vw;
    width: 20.833vw;
    .img {
      width: 100%;
      background-color: white;
      height: 20.832vw;
      border-radius: 50%;
      border: 3px solid #93b6e1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      color: white;
      text-align: center;
      font-size: 4.167vw;
      padding-top: 3px;
    }
  }
}
/deep/ .van-icon-arrow-left {
  color: white;
  font-size: 5.556vw;
}
</style>