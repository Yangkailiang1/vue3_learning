<template>
<div class="todoapp">
	<TodoHeader @add-todo="addTodo"/>
	<TodoMain :todos="todoList"
		@del-todo="deleteTodo"/>
	<TodoFooter :todo-list="todoList"
		@clearCompleted="clearCompleted"/>
</div>
</template>

<script setup>
	import TodoHeader from './components/TodoHeader.vue';
	import TodoMain from './components/TodoMain.vue';
	import TodoFooter from './components/TodoFooter.vue';
	import './assets/style.css'
	import { ref,watch } from 'vue';
	const todoList = ref(
		JSON.parse(localStorage.getItem(TODO_LIST_KEY)) || []
	)

	const TODO_LIST_KEY='todo-list-key'
	const addTodo = (title) => {
		const newTodo = {
			id: Date.now(),
			name: title,
			finished: false
		}
		todoList.value.push(newTodo)
	}

	const deleteTodo = (index) => {
		if (index >= 0 && index < todoList.value.length) {
            todoList.value.splice(index, 1)
		}
	}

	//将全部的已经finished得给去掉
	const clearCompleted = () => {
		todoList.value = todoList.value.filter(item => !item.finished)
	}

	watch(todoList, (newVal) => {
		localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newVal))
	}, { deep: true })
</script>

<style scoped>

</style>