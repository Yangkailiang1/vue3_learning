<script setup>
//导入样式
  import './styles/index.css' 
  import { ref } from 'vue'
  // 代办任务列表
  const todoList = ref([
    { id: 321, name: '吃饭饭', finished: false },
    { id: 666, name: '睡觉觉', finished: true },
    { id: 195, name: '打⾖⾖', finished: false }
    ])

    const title=ref('')
    const add=() =>{
      //去除首尾空格
      const name=title.value.trim()
      //非空判断
      if(! name){
        alert('任务名称不能为空')
        title.value=''
        return
      }
      //给数组新增一个对象
      todoList.value.push({
        id:Date.now(),//时间戳
        name,
        finished:false  
      })
      //清空输入框
      title.value=''
    }
    const del=(i)=>{
      if(window.confirm('确认删除？')){
        todoList.value.splice(i,1)
      }
      
    }

    const clearall=()=>{
      if(window.confirm('确认清空所有')){
        todoList.value=[]
      }
    }
</script>
  <template>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" 
        placeholder="What needs to be done?" 
        autofocus 
        v-model="title"
        @keydown.enter="add"/>
      </header>
    <section class="main">
    <ul class="todo-list">
      <li v-for="(item,index) in todoList" :key="item.id">
        <div class="view">
        <label>{{item.name}}</label>
        <button class="destroy" @click="del(index)"></button>
        </div>
      </li>
    </ul>
    </section>
    <footer class="footer" v-if="todoList.length>0">
    <span class="todo-count"><strong>{{ todoList.length }}</strong> item all</span>
    <button class="clear-completed" @click="clearall">Clear all</button>
    </footer>
    </section>
  </template>
<script setup>
  
</script>

<style scoped>

</style>