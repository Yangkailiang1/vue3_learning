<template>
  <table border="1" cellspacing="0" cellpadding="0">
    <caption>
      <h3>比特人的橱窗</h3>
    </caption>
    <thead>
      <tr>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody >
      <tr v-for="(item,index) in goodsList">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
         <button @click="del(index)">删除</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">暂无数据</td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
  import {ref} from 'vue'
  const goodsList = ref([
    { id: 101, name: 'biangbiang⾯', price: 13 },
    { id: 102, name: '葫芦头', price: 20 },
    { id: 103, name: '冰峰', price: 2 },
    { id: 104, name: '⾁夹馍', price: 11 },
    { id: 105, name: '⽺⾁泡馍', price: 18 }
  ])

  const del=(i)=>{
    if(window.confirm('确认删除吗')){
      goodsList.value.splice(i,1)
    }
  }
</script>

<style lang="scss">
  table{
    width: 500px;
    margin: 150px auto;
    text-align:center;
    font-family: 'Courier New', Courier, monospace;

    tr{
      height: 40px;
    }

    tfoot{
      height: 100px;
    }
  }
</style>