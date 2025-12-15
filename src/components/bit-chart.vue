<script setup>
    import * as echarts from 'echarts';
    import { ref,onMounted } from 'vue';
    onMounted(() => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.value);
        // 绘制图表
        myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
            }
        ]
        })
    });
    
    const divRef = ref(null);

</script>
<template>
  <div class="bit-chart" ref="divRef"></div>
</template>
<style lang="scss" scoped>
  .bit-chart {
    width: 800px;
    height: 500px;
    margin: 100px auto;
    border: 3px solid palevioletred;
  }

</style>
