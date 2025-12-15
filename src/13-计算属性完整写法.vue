<template>
<div>
	<input type="text" v-model="uname"></input>
</div>
</template>

<script setup>
	import { computed } from 'vue'

	// const uname= computed(()=>{
	// 	return "只因你太美"
	// })

	const uname= computed({
		get(){
			return "只因你太美"
		},
		set(val){
			console.log(val)
		}
	})
</script>

<style scoped>

</style>