<template>
  <div class="hm-button" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.hm-button {
  margin: 20px;
  margin-top: 50px;
  height: 50px;
  line-height: 50px;
  background-color: #cc3300;
  color: #fff;
  text-align: center;
  font-size: 18px;
  border-radius: 25px;
}
</style>