<template>
  <div class="box">
    <div class="top">
      <van-icon name="arrow-left" />
      <span class="title">登录</span>
    </div>

    <!-- 用户名 -->
    <AuthInput type="text" placeholder="请输入用户名/手机号" @valchange="setUsername" />
    <!-- 密码 -->
    <AuthInput type="password" placeholder="请输入密码" @valchange="setPassword" />
    <!-- 验证码 -->
    <AuthInput type="text" placeholder="请输入验证码" />

    <!-- 按钮 -->
    <AuthButton text="登录" />
  </div>
</template>

<script>
import AuthInput from "@/components/user/AuthInput";
import AuthButton from "@/components/user/AuthButton";
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
    setPassword(password) {
      this.password = password;
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  height: 13.889vw;
  line-height: 13.889vw;
  background-color: #359ce7;
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
</style>