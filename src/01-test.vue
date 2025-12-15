<script setup>
  import { ref } from 'vue'

  const msg=ref("hello vue3")
  const href=ref("http://www.baidu.com")
</script>
<template>
  <div v-bind:title="msg">
    {{ msg }}
  </div>

  <a :href="href">百度一下</a>
</template>

<style scoped>

</style>