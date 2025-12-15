<script setup>
  import { ref } from "vue"
  //控制盒子是否可见
  const visible=ref(true)

  const isLogin=ref(true)
</script>

<template>
  <div class="red" v-show="visible"></div>
  <div class="green" v-if="visible"></div>
  

  <div v-if="isLogin">欢迎回来</div>
  <div v-else>你好，请登录</div>
</template>



<style scoped>
  .red,
  .green{
    width: 200px;
    height:200px;
  }

  .red{
    background:red;
  }
  .green{
    background: green;
  }
</style>