<!-- 出勤趋势折线图 -->
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
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(20, 33, 61, 0.8)', // 提示框背景色
          borderWidth: 0,
          borderRadius: 8,
          textStyle: {
            color: '#ffffff', // 字体颜色
            fontSize: 12
          },
          formatter: params => {
            const content = params.map(item => `${item.seriesName}: ${item.value}%`)
            return `${content.join('<br>')}<br>${params[0].axisValue}`
          }
        },
        xAxis: {
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07'], // 示例数据
          boundaryGap: false, // x轴边界
          axisLine: {
            lineStyle: {
              color: '#6173A3' // x轴颜色
            }
          },
          axisLabel: {
            color: '#FFFFFF'
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
            color: '#FFFFFF'
          },
          splitLine: {
            lineStyle: {
               color: 'rgba(255, 255, 255, 0.2)'
            }
          }
        },
        series: [
          {
            name: '因子1含量',
            type: 'line',
            smooth: true, // 平滑曲线
            data: [12, 15, 10, 14, 20, 13, 17], // 示例数据
            lineStyle: {
              color: '#FDE386',
              width: 2
            },
            itemStyle: {
              color: '#FDE386' // 折线圆点颜色
            },
            symbol: 'circle', // 圆点样式
            symbolSize: 8 // 圆点大小
          },
          {
            name: '因子2含量',
            type: 'line',
            smooth: true,
            data: [10, 14, 11, 13, 18, 15, 16], // 示例数据
            lineStyle: {
              color: '#9DE4E0',
              width: 2
            },
            itemStyle: {
              color: '#9DE4E0' // 折线圆点颜色
            },
            symbol: 'circle', // 圆点样式
            symbolSize: 8 // 圆点大小
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
