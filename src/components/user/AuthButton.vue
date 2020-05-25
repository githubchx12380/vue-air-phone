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
    width: 83.333vw;
    height: 12.5vw;
    font-size: 5vw;
    color: #fff;
    border-radius: 6.944vw;
    background-color: #2b68c1;
    border: 0vw;
    margin: 13.889vw 0 0;
  }
}
</style>