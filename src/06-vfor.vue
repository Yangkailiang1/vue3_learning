<script setup>
  import {ref} from 'vue'
  //数组列表
  const nums=ref([11,22,33,44])

  //商品列表
  const goodsList=ref([
    {id:1,name:'篮球',price:299},
    {id:2,name:'足球',price:399},
    {id:3,name:'铅球',price:499}
  ])
</script>
<template>
  <div>
    <li v-for="(item,index) in nums">
      {{ item }} => {{ index }}
    </li>
  </div>

  <div class="goods-list">
    <div class="goods-item" v-for="(item,index) in goodsList">
      {{ item.id }}=>{{ item.name }}=>{{ item.price }}=>{{index}}
    </div>
  </div>
</template>
<style scoped>

</style>