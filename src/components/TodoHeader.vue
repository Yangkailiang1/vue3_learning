<script setup>
    import { ref } from 'vue';
    //收集输入框的值
    const title=ref('')
    const emit=defineEmits()
    const onEnter=()=>{
        if(!title.value) return alert('请输入内容');
        emit('add-todo',title.value)

        title.value=''
    }
</script>
<template>
    <header class="header">
    <h1>⽐特⼈的记事本</h1>
    <input 
        class="new-todo" 
        placeholder="What needs to be finished?" 
        autofocus
        v-model.trim="title"
        @keydown.enter="onEnter"
        />
    </header>
</template>