<template>
    <div class="item">
      <img :src="imgUrl" alt="⽵制⼲泡茶盘正⽅形沥⽔茶台品茶盘" />
      <p class="name">{{ title }}</p>
      <p class="price">
        <span>{{ price }}.00</span>
        <button @click="onCut()">砍一刀</button>
      </p>
    </div>
</template>

<script setup>
  import{ref} from 'vue';
  const props=defineProps(['imgUrl','idx', 'title', 'price']);
  const emit=defineEmits();
  const onCut=()=>{
      emit('ccc',props.idx,x.value);
  }
  const x=ref(3);
</script>

<style scoped lang="scss">
    .item {
    width: 240px;
    margin-left: 10px;
    padding: 20px 30px;
    transition: all 0.5s;
    margin-bottom: 20px;

    .item:nth-child(4n) {
      margin-left: 0;
    }

    &:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -4px, 0);
      cursor: pointer;
    }

    img {
      width: 100%;
    }

    .name {
      font-size: 18px;
      margin-bottom: 10px;
      color: #666;
    }

    .price {
      display: flex;
      align-items: center;
      height: 36px;
      font-size: 22px;
      color: firebrick;
      button{
        margin-left: 40px;
        font-size:14px
      }
    }

    .price::before {
      content: '¥';
      font-size: 22px;
    }
  }
</style>