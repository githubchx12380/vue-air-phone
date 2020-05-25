<template>
  <div class="box">
    <div class="top">
      <van-icon name="arrow-left"  @click="$router.back()" />
      <span class="title">注册</span>
    </div>

    <!-- 用户名 -->
    <AuthInput
      type="text"
      placeholder="请输入用户名/手机号"
      @valchange="setUsername"
      rule="^\d{6,18}$"
      errorMessage="用户名为6到18位"
    />
    <!-- 密码 -->
    <AuthInput
      type="password"
      placeholder="请输入密码"
      @valchange="setPassword"
      rule="^\d{6,18}$"
      errorMessage="密码为6到18位"
    />

    <!-- 按钮 -->
    <AuthButton text="注册" @clickbtn="sendVal" />

    <!-- 切换为注册 -->
    <router-link class="changePage" to="/login">您已有账号？点击登录</router-link>
  </div>
</template>

<script>
import AuthInput from "@/components/user/AuthInput";
import AuthButton from "@/components/user/AuthButton";
import { userRegister } from "@/api/user.js";
export default {
  components: {
    AuthInput,
    AuthButton
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    // 保存用户名
    setUsername(username) {
      this.username = username;
    },
    // 保存密码
    setPassword(password) {
      this.password = password;
    },
    // 点击按钮
    sendVal() {
      if (!this.username || !this.password) {
        this.$toast.fail("用户名或密码不能为空");
      }
      userRegister(this.username, this.password).then(res => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.$toast.success(res.data.msg);
          setTimeout(() => {
            this.$router.replace("/login");
          }, 300);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  height: 13.889vw;
  line-height: 13.889vw;
  background-color: #2c6fc6;
  color: #ffffff;
  text-align: center;
  position: relative;
  font-size: 5.556vw;
  margin-bottom: 13.889vw;
  .van-icon-arrow-left {
    position: absolute;
    left: 3.333vw;
    top: 4.333vw;
  }
  .title {
    font-size: 5.556vw;
  }
}
.changePage {
  display: block;
  text-align: center;
  font-size: 3.889vw;
  color: #888;
  cursor: pointer;
  margin: 4.167vw 0;
}
</style>