<script setup>
	import myform from './components/MyForm.vue'
	import { ref ,onMounted} from 'vue'
	const formref=ref(null)
	onMounted(()=>{
		console.log(formref.value.validate())
	})
</script>
<template>
	<div class="login-box">
		<myform ref="formref"/>
		<button>登录</button>
	</div>
</template>