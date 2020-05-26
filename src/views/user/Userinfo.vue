<template>
  <div class="userinfo" v-if="!Object.keys(userinfo).lengtn">
      <van-nav-bar
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
      />
      <loading v-if="loadingShow" />
      <div v-if="!loadingShow">
          <div style="margin:2.778vw 0;">
          <userinfo-banner left="头像">
            <img v-if="userinfo.head_img" :src="userinfo.head_img" slot="right" alt="">
            <img src="@/assets/img/user_img.png" v-else slot="right" alt="">
          </userinfo-banner>
            <userinfo-banner left="昵称" :info="userinfo.head_img"></userinfo-banner>
            <userinfo-banner left="账号" :info="userinfo.username" :icos="true"></userinfo-banner>
            <userinfo-banner left="邮箱" :info="userinfo.email"></userinfo-banner>
          </div>
          <div style="margin:2.778vw 0;">
            <userinfo-banner left="性别" :info="userinfo ? '男' : '女'"></userinfo-banner>
            <userinfo-banner left="出生日期" :info="userinfo.birth_date"></userinfo-banner>
            <userinfo-banner left="信用分" :info="userinfo.xinyong"></userinfo-banner>
          </div>
      </div>
  </div>
</template>

<script>
import UserinfoBanner from '@/components/user/UserinfoBanner'
import loading from '@/components/common/loading.vue'
import { get_webuserinfo } from '@/api/user.js'
export default {
  data() {
    return {
      userinfo:{},
      loadingShow:true,
    }
  },
  components:{
    UserinfoBanner,
    loading
  },
  mounted() {
    setTimeout(() => {
      this.loadingShow = false
    },500)
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