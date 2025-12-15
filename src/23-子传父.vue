<script setup>
	import MyGoods from './components/MyGoods.vue';
	import { ref } from 'vue';
// 提供数据
	// 商品列表
	const goodsList = ref([
	{
	id: '4001172',
	name: '称⼼如意⼿摇咖啡磨⾖机咖啡⾖研磨机',
	price: 289,
	picture:
	'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2219496888938/O1CN01qKHBEk2Ftf4ofaAuD_!!4611686018427386474-0-item_pic.jpg_360x360q90.jpg'
	},
	{
	id: '4001594',
	name: '⽇式⿊陶功夫茶组双侧把茶具礼盒装',
	price: 288,
	picture:
	'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2218528392135/O1CN01LYMztL1RdsdlV2cbO_!!4611686018427380679-0-item_pic.jpg_360x360q90.jpg'
	},
	{
	id: '4001009',
	name: '⽵制⼲泡茶盘正⽅形沥⽔茶台品茶盘',
	price: 109,
	picture:
	'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2211430651307/O1CN01qW2xEf1LWeRcqgusJ_!!0-item_pic.jpg_360x360q90.jpg'
	},
	{
	id: '4001874',
	name: '古法温酒汝瓷酒具套装⽩酒杯莲花温酒器',
	price: 488,
	picture:
	'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/202625378/O1CN01f5UIVY1pbB2wObcXD_!!202625378.jpg_360x360q90.jpg'
	},
	{
	id: '4001649',
	name: '⼤师监制⻰泉⻘瓷茶叶罐',
	price: 139,
	picture:
	'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/2517564766/O1CN015mchx91l4skkG7rkC_!!2517564766.jpg_360x360q90.jpg'
	},
	{
	id: '3997185',
	name: '与众不同的⼝感汝瓷⽩酒杯套组1壶4杯',
	price: 108,
	picture:
	'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2218626744/O1CN01n6eypA1zgo6FvC8JI_!!4611686018427383480-0-item_pic.jpg_360x360q90.jpg'
	},
	{
	id: '3997403',
	name: '⼿⼯吹制更厚实⽩酒杯壶套装6壶6杯',
	price: 100,
	picture:
	'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/785718878/O1CN017n2Sg82FSBJwjhVih_!!785718878.png_360x360q90.jpg'
	},
	{
	id: '3998274',
	name: '德国百年⼯艺⾼端⽔晶玻璃红酒杯2⽀装',
	price: 139,
	picture:
	'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2206588314948/O1CN01AQ854J1mQEqI3byrV_!!2206588314948-0-C2M.jpg_360x360q90.jpg'
	}
	])

	//i为数组下表，price为每次减少的价格
	const subprice=(index,price)=>{
		goodsList.value[index].price-=price;
	}
</script>
<template>
  <div class="list" >
    <my-goods v-for="item,index in goodsList" 
	:key="item.id" 
	:idx="index"
	:imgUrl="item.picture" 
	:title="item.name" 
	:price="item.price"
	@ccc="subprice"/>
  </div>
</template>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .list {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

</style>
