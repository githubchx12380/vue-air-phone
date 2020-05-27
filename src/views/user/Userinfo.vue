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
              <!-- 头像上传 -->
            <div class="uploadfile">
              <van-uploader class="uploadimg" preview-size="100vw" :before-read="beforeRead" />
              <userinfo-banner left="头像">
                <img v-if="userinfo.head_img" :src="reqbaseURL +  userinfo.head_img" slot="right" alt="">
                <img src="@/assets/img/user_img.png" v-else slot="right" alt="">
              </userinfo-banner>
            </div>
            <!-- 修改昵称 -->
            <userinfo-banner left="昵称" :info="userinfo.name" @UpdateInfoHandle="nameshow = true" />
            
            <userinfo-banner left="账号" :info="userinfo.username" :icos="true" />
            <userinfo-banner left="邮箱" :info="userinfo.email" :icos="true"></userinfo-banner>
          </div>

          <div style="margin:2.778vw 0;">
            <userinfo-banner left="性别" :info="userinfo.gender ? '男' : '女'" @UpdateInfoHandle="gendershow = true" />
            <userinfo-banner left="出生日期" :info="userinfo.birth_date" @UpdateInfoHandle="UpdateDate" />
            <userinfo-banner left="信用分" :info="userinfo.xinyong" :icos="true" />
          </div>
      </div>
      <!-- 昵称 -->
          <van-dialog v-model="nameshow" 
                title="昵称" 
                show-cancel-button 
                @confirm="HandleName"
                @cancel="content = ''"
                >
              <van-field v-model="content"  autofocus />
          </van-dialog>


         
        

          <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="HandleGender" />
  </div>
</template>

<script>
import UserinfoBanner from '@/components/user/UserinfoBanner'
import loading from '@/components/common/loading.vue'
import { get_webuserinfo,post_upload,update_info } from '@/api/user.js'
import request from '@/http/request'
export default {
  data() {
    return {
      userinfo:{},
      loadingShow:true,
       show:false,
            nameshow:false,
            gendershow:false,
            content:'',
            actions: [
                { name: '男',val:1 },
                { name: '女',val:0 },
      ],
    }
  },
  components:{
    UserinfoBanner,
    loading
  },
  methods:{
    //头像上传
    beforeRead(file) {
        if (file.type != 'image/jpeg' && file.type != 'image/png') {
          this.$msg.fail('请上传jpg png格式图片');
          return false;
        }
        const fromdata = new FormData()
        fromdata.append('file',file)
        post_upload(fromdata).then(res => {
          this.userinfo.head_img = res.data.url
          if(res.data.code == 200) {
             this.$msg.success(res.data.msg)
             this.update_userinfo()
          }
        })
    },
    //修改昵称
    HandleName() {
     this.userinfo.name = this.content
     this.update_userinfo()
     this.content = ''
    },
    //修改性别
    HandleGender(val) {
     this.userinfo.gender = val.val
     this.update_userinfo()
     this.gendershow = false
    },
    //修改出生日期
    UpdateDate() {

    },
    //修改个人资料信息
    update_userinfo() {
      update_info(localStorage.getItem('userId'),this.userinfo).then(res => {
        console.log(res);
      })
    }
    
  },
  computed:{
    reqbaseURL() {
      return request.defaults.baseURL
    }
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
  .uploadfile{
    position: relative;
    overflow: hidden;
    .uploadimg{
      opacity: 0;
      position: absolute;
    }
  }
}
</style>