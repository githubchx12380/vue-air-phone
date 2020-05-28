<template>
  <div class="box">
    <div class="top">
      <van-icon name="arrow-left" @click="$router.back()" />
      <span class="title">登录</span>
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
    <AuthButton text="登录" @clickbtn="sendVal" />

    <!-- 切换为注册 -->
    <router-link class="changePage" to="/register">您还没有账号？请立即注册</router-link>
  </div>
</template>

<script>
import AuthInput from "@/components/user/AuthInput";
import AuthButton from "@/components/user/AuthButton";
import { userLogin } from "@/api/user.js";
export default {
  components: {
    AuthInput,
    AuthButton,
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
      userLogin(this.username, this.password).then(res => {
        const { data } = res.data;
        if (res.data.code == 200) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.id);
          this.$toast.success(res.data.msg);
          this.$store.dispatch('cart/LOCASTOREAGE_CART')
          setTimeout(() => {
            this.$router.replace("/personalcenter");
          }, 300);
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>
.top {
  height: 13.889vw;
  line-height: 13.889vw;
  background-color: #2b71c6;
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