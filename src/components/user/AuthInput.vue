<template>
  <div class="inputWrapper">
    <input
      :class="{error:!isValid}"
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      @blur="valchange"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder", "rule", "errorMessage"],
  data() {
    return {
      inputValue: "",
      isValid: true
    };
  },
  methods: {
    valchange() {
      if (!this.isValid) {
        this.$toast(this.errorMessage);
      }
      this.$emit("valchange", this.inputValue);
    }
  },
  watch: {
    inputValue() {
      let reg = new RegExp(this.rule);
      if (!reg.test(this.inputValue)) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
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
  .error {
    border-color: red;
  }
}
</style>