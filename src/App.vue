<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
</script>

<style>
html,
body,
#app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* 公共类 */
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.van-field__label,
.van-field__control {
  font-size: 16px;
}
</style>