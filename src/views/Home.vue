<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <my-button />
    <my-button>默认按钮</my-button>
    <!--     // 带类型的按钮 -->
    <my-button type="primary">主要按钮</my-button>
    <my-button type="warning">警告按钮</my-button>
    <my-button type="danger">危险按钮</my-button>
    <my-button type="success">成功按钮</my-button>
    <my-button type="info">信息按钮</my-button>
    <my-icon />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
}
</script>
