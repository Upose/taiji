<!-- 人管管理柱状图 -->
<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        xAxis: {
          type: 'category',
          data: ['01', '02', '03', '04', '05', '06', '07'],
          axisLabel: {
            color: '#ffffff', // 坐标轴字体颜色
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: '#ffffff' // 坐标轴颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#ffffff', // y轴文字颜色
            fontSize: 12
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)', // 分割线
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#ffffff' // y轴线条颜色
            }
          }
        },
        grid: {
          left: 80,
          right: 0,
          top: 30,
          bottom: 30
        },
        series: [
          {
            type: 'pictorialBar',
            symbol: 'rect', // 矩形块
            symbolSize: [22, 4], // 矩形宽度、高度
            symbolMargin: 2, // 矩形之间的间距
            symbolRepeat: true, // 符号重复
            data: [1456, 990, 1056, 886, 647, 659, 622], // 数据
            barCategoryGap: '40%', // 调整柱状图之间的间隔
            itemStyle: {
              color: '#55B4CC' // 块的颜色
            },
            label: {
              show: true,
              position: 'top', // 数据标签显示在顶部
              color: '#ffffff',
              fontSize: 12
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
