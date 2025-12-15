<script setup>
	import { ref } from 'vue'
	import axios from 'axios'
	async function getBannerData(){
		const resp=await axios({
			method:'get',
			url:'http://localhost:4000/api/banner'
		})

		images.value=resp.data.data
		console.log(images.value)
	}
	getBannerData()


	const images=ref([])

	//当前展示的图片下标
	const i=ref(0)
	const next=()=>{
		i.value++
		if(i.value>=images.value.length){
			i.value=0
		}
	}
	const prev=()=>{
		i.value--
		if(i.value<0){
			i.value=images.value.length-1
		}
	}

	//记录定时器的id
	let timer=null
	const play=()=>{
		timer=setInterval(()=>{
			next()
		},3000)
	}
	play()
	const stop=()=>{
		clearInterval(timer)
		timer=null
	}
</script>
<template>
	<div class="banner" @mouseenter="stop" @mouseleave="play">
		<ul>
			<li 
			:class="{active:index===i}" 
			v-for="(url,index) in images" 
			:key="index">
			<img :src="url" />
			</li>
		</ul>
		<!-- 指示器 -->
		<div class="indicator">
			<span 
				:class="{active:index===i}" 
				v-for="(n,index) in images.length"
				:key="n"
				@click="i=index"
				> 
			</span>
		</div>
		<div class="ctrl">
			<a href="javascript:;" 
				class="btn prev"
				@click="prev"
				> &lt; </a>
			<a href="javascript:;" 
				class="btn next"
				@click="next"
				> &gt; </a>
		</div>
	</div>
</template>
<style>
	* {
		margin: 0;
		padding: 0;
	} 
	a{ text-decoration: none;
		color: #000;
	} 
	.btn{
		position:absolute;
		top:50%;
		width: 30px;
		height: 30px;
		line-height: 30px;
		margin-top: -15px;
		font-size:14px;
		text-align:center;
		background: rgba(0,0,0,0.3);
		color: #fff;
		border-radius: 50%;
	}
	.btn.prev{
		left: 15px;
	}
	.btn.next{
		right: 15px;
	}
	.banner {
		position: relative;
		width: 1200px;
		height: 337px;
		margin: 150px auto;
	}
	.banner ul {
		width: 100%;
		height: 100%;
		list-style: none;
	} 
	.banner ul li {
		position: absolute;	
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 1.2s;
	} 
	.banner ul li.active {
		opacity: 1;
	} 
	
	.banner .indicator {
		display: flex;
		justify-content: center;
		position: absolute;
		left: 0;
		bottom: 20px;
		width: 100%;
	} 
	.banner .indicator span {
		width: 30px;
		height: 2px;
		margin: 0 5px;
		cursor: pointer;
		background: rgba(255, 255, 255, 0.6);
	}
	.banner .indicator span.active {
		background: #fff;   /* 或你想要的颜色 */
	}
</style>