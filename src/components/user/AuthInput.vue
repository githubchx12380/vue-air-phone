<template>
  <div class="inputWrapper">
    <input :type="type" :placeholder="placeholder" v-model="inputValue" @blur="valchange"/>
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder"],
  data() {
    return {
      inputValue: ""
    };
  },
  methods:{
    valchange(){
      this.$emit('valchange',this.inputValue)
    }
  }
};
</script>

<style lang="less" scoped>
.inputWrapper {
  display: flex;
  justify-content: center;
  padding: 0 9.722vw;
  margin-top: 7.556vw;

  input {
    width: 88.889vw;
    height: 10vw;
    color: #949494;
    font-size: 4.444vw;
    border: 0vw;
    border-bottom: 1px solid #e4e4e4;
    outline: none;
    padding: 0 1.389vw;
  }
}
</style>