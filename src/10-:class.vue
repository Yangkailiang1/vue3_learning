<template>
<div>
  <p :class="is_active?'active':''">Active1</p>

  <p :class="{active:is_active}">Active2</p>

  <p class="item" :class="{active:is_active}">Active3</p>
</div>
</template>

<script setup>
  import {ref} from 'vue'
  const is_active=ref(true)
</script>

<style scoped>
  .active{
    color:red;
  }
</style>