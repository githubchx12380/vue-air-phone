<template>
  <div class="btnWrapper">
    <button @click="handleBtn">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    handleBtn() {
      this.$emit("clickbtn");
    }
  }
};
</script>

<style lang="less" scoped>
.btnWrapper {
  display: flex;
  justify-content: center;
  button {
    width: 300px;
    height: 45px;
    font-size: 5vw;
    color: #fff;
    border-radius: 6.944vw;
    background-color: #359ce7;
    border: 0vw;
    margin: 13.889vw 0;
  }
}
</style>