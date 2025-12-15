<template>
    <div class="formbox">
        账号：<input type="text"/>
        <br/>
        密码：<input type="password"/>
    </div>
</template>

<script setup>
    const validate=()=>{
        return Math.random()>0.5 ?true:false
    }
    //组件对外暴露
    defineExpose({
        validate
    })
</script>

<style scoped>

</style>