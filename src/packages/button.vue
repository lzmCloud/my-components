<template>
  <button class="my-button" :class="btnClass" @click="$emit('click', $event)">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    type: {
      type: String,
      default: '',
      validator: function(type) {
        let typeArr = ['primary', 'warning', 'danger', 'success', 'info']
        if (type && typeArr.indexOf(type) == -1) {
          console.error(
            'type的类型必须为primary, warming, danger, success, info',
          )
        }
        return true
      },
    },
  },
  computed: {
    btnClass() {
      let classes = []
      if (this.type) {
        classes.push(`my-button-${this.type}`)
      }
      return classes
    },
  },
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
.my-button {
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
  // 因为五中类型的按钮样式一个个写太过复杂，这里采用scss的循环遍历@each来写
  // 格式：@each 类型,颜色  in (key:值) {
  //  #{}取值表达式
  // }

  $color-list: (
    // 定义颜色maps，类似于数组，但是里面可以放键值，数组只能单个值
      primary: $primary,
    success: $success,
    info: $info,
    warning: $warning,
    danger: $danger
  );
  // 循环颜色maps，两个参数第一个为键第二个为值
  @each $c123, $c2 in $color-list {
    &-#{$c123} {
      background: #{$c2};
      border: 1px solid #{$c2};
      color: #fff;
    }
  }

  $color-hover-list: (
    primary: $primary-hover,
    success: $success-hover,
    info: $info-hover,
    warning: $warning-hover,
    danger: $danger-hover,
  );
  @each $type, $color in $color-hover-list {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
}
</style>
