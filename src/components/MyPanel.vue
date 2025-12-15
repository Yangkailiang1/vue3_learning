<template>
  <div class="panel">
  <div class="title">
  <h4>⾃由与爱情</h4>
  <span class="btn" @click="visible=!visible"> {{ visible ? '收起' : '展开'}} </span>
  </div>
    <div class="container" v-show="visible">
      <p>⽣命诚可贵,</p>
      <p>爱情价更⾼。</p>
      <p>若为⾃由故，</p>
      <p>两者皆可抛。</p>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  //控制盒子的显式或隐藏
  const visible=ref(true)
</script>

<style scoped>
    .panel {
    .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    border: 1px solid #ccc;
  } 
  .title h4 {
    line-height: 2;
    margin: 0;
  } 
  .container {
    border: 1px solid #ccc;
    padding: 0 1em;
  } 
  .btn {
    cursor: pointer;
    }
  }
</style>