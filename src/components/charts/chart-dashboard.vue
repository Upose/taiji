<!-- 首页 环境因子仪表盘 -->
<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        series: [
          {
            name: '拜访率',
            type: 'gauge',
            zlevel: 1,
            splitNumber: 3,
            axisLine: {
              lineStyle: {
                color: [
                  [0.4, '#55B4CC'],
                  [0.6, '#9DE4E0'],
                  [1, '#CEFFE8']
                ],
                width: 15
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false,
            },
            pointer: {
              show: true, // 显示指针
              length: '25%', // 指针长度（相对于表盘的半径）
              width: 4, // 指针宽度
              itemStyle: {
                color: '#86FDE0' // 指针颜色
              },
              offsetCenter: [-5, -25]
            },
            detail: {
              formatter: '{value}',
              offsetCenter: [2, -5],
              textStyle: {
                fontSize: 18,
                color: '#fff'
              }
            },
            title: {
              offsetCenter: [0, '100%']
            },
            data: [
              {
                name: '',
                value: 30
              }
            ]
          },
        ]
      }
    }
  }
})
</script>

<template>
  <v-chart :option="props.option" />
</template>
