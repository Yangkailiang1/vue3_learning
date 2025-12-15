<template>
	<bit-dialog
	:opacity="0.5"/>
</template>

<script setup>
	import bitDialog from './components/bit-dialog.vue';
	import { ref } from 'vue';
	const opacity = ref(0.5);
</script>

<style scoped>

</style>