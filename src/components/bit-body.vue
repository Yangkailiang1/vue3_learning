<script setup>
    import BitC from './bit-c.vue'
    import BitDs from './bit-ds.vue'
    import BitJava from './bit-java.vue'
</script>
<template>
    <div class="bit-body">
        <div class="main">
            <bit-c/>
            <bit-ds/>
            <bit-java/>
        </div>
    </div>
</template>
<style>
.bit-body {
display: flex;
justify-content: center;
background: #f6f8fa;
} 
.bit-body h3 {
margin-bottom: 15px;
} 
.bit-body .main {
width: 1200px;
}
</style>