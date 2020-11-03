<template>
  <button class="poly-button">
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style lang="scss" scoped>
@import '../styles/_var.scss';
$height: 42px; // 设置一些公共变量
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.poly-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }
}
</style>
