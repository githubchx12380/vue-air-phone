<template>
  <div class="userinfo" v-if="!Object.keys(userinfo).lengtn">
      <van-nav-bar
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
      />
      
      <div style="margin:2.778vw 0;">
        <userinfo-banner left="头像">
          <img v-if="userinfo.head_img" :src="userinfo.head_img" slot="right" alt="">
          <img src="@/assets/img/user_img.png" v-else slot="right" alt="">
        </userinfo-banner>
        <userinfo-banner left="昵称"></userinfo-banner>
        <userinfo-banner left="手机"></userinfo-banner>
        <userinfo-banner left="邮箱"></userinfo-banner>
      </div>
  </div>
</template>

<script>
import UserinfoBanner from '@/components/user/UserinfoBanner'
import { get_webuserinfo } from '@/api/user.js'
export default {
  data() {
    return {
      userinfo:{}
    }
  },
  components:{
    UserinfoBanner
  },
  mounted() {
    get_webuserinfo(localStorage.getItem('userId')).then(res => {
      this.userinfo = res.data.data[0]
    })
  }
}
</script>

<style scoped lang="less">
.userinfo{
  background-color: #ebeced;
  height: 100vh;
}
</style>