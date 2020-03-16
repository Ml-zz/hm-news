<template>
  <div class="hm-input">
    <input
      :class="{success: status==='success', err: status==='error'}"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="inputFn"
    >
    <div class="tips" v-show="status==='error'">{{message}}</div>
  </div>
</template>

<script>
export default {
  // props: ['type', 'placeholder']
  // props的校验
  data() {
    return {
      status: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    value: String,
    rule: RegExp,
    message: String
  },
  methods: {
    inputFn(e) {
      this.$emit('input', e.target.value)
      this.validate(e.target.value)
    },
    validate(value) {
      if (this.rule.test(value)) {
        this.status = 'success'
        return true
      } else {
        this.status = 'error'
        return false
      }
    }
  }
}
</script>

<style lang='less' scoped>
.hm-input {
  height: 50px;
  margin: 20px;
  input {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid #666;
    font-size: 16px;
    color: #666;
    &.err {
      border-color: red;
    }
    &.success {
      border-color: green;
    }
  }
  .tips {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: red;
  }
}
</style>