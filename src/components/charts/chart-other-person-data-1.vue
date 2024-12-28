<!-- 其他人员相关统计指标 -->
<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        grid: {
          left: '0', 
          right: '30px',
          top: '3%',
          bottom: '1%', 
          containLabel: true 
        },
        xAxis: {
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
          axisLine: {
            lineStyle: {
              color: '#6173A3' // x轴颜色
            }
          },
          axisLabel: {
            color: '#FFFFFF', // x轴标签颜色
            fontSize: 12
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#6173A3' // y轴颜色
            }
          },
          axisLabel: {
            color: '#FFFFFF', // y轴标签颜色
            fontSize: 12
          },
          splitLine: {
            lineStyle: {
              color: '#2A3758' // y轴网格线颜色
            }
          }
        },
        series: [
          {
            type: 'bar',
            data: [1500, 1600, 1400, 1700, 1300, 1200, 1500, 1550, 1450, 1600],
            barWidth: '15px', // 柱子宽度
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#6AE4C6' },
                  { offset: 1, color: '#287DF5' }
                ]
              },
              borderRadius: [3, 3, 0, 0] // 圆角柱状图
            }
          }
        ]
      }
    }
  }
})
</script>

<template>
  <v-chart :option="props.option" />
</template>
