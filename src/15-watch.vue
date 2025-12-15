<template>
<div>
	<input type="text" v-model="keyword" placeholder="Type something..."/>
	<br/>
	<br/>	
	<input type="text" v-model="obj.username" placeholder="Username"/>
	<br/>
	<br/>	
	<input type="text" v-model="obj.password" placeholder="password"/>
</div>
</template>

<script setup>
	import { ref,watch,reactive} from 'vue';

	const keyword= ref('')

	watch(keyword,(newVal,oldVal)=>{
		console.log('keyword changed:',newVal)
		console.log('keyword changed:',oldVal)
	})

	//响应式对象
	const obj=reactive({
		username:'',
		password:''
	})

	watch(obj,()=>{
		console.log('obj变了')
	})
</script>

<style scoped>

</style>