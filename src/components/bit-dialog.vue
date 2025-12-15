<script setup>
    const props=defineProps({
        opacity:{
            type:Number,
            default:1,
            validator(value){
                return value>=0 && value<=1;
            }

        }
    });
</script>
<template>
    <div class="bit-dialog" :style="{background:`rgba(0,0,0,${props.opacity})`}">
        <div class="dialog-container">
            <div class="dialog-header">⽐特Dialog对话框</div>
                <div class="dialog-body">
                <p>主体内容</p>
                <p>主体内容</p>
                <p>主体内容...</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bit-dialog {
    display: flex;
    justify-content: center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 100px;
    .dialog-container {
        width: 600px;
        height: fit-content;
        background: #fff;
        .dialog-header {
        padding: 10px 20px;
        height: 35px;
        line-height: 35px;
        box-shadow: 0 3px 6px 0 rgba(7, 35, 68, 0.15);
    } 
        .dialog-body {
        padding: 10px 20px;
        }
    }
}
</style>