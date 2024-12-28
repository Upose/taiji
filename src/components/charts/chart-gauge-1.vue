<!-- 出勤趋势折线图 -->
<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        tooltip: {
          formatter: '{a} <br/>{b}: {c}%'
        },
        series: [
          {
            name: '进度',
            type: 'gauge',
            radius: '90%', // 控制仪表盘的大小
            startAngle: 225, // 起始角度
            endAngle: -45, // 结束角度
            splitNumber: 10, // 刻度数量
            axisLine: {
              lineStyle: {
                width: 15, // 仪表盘圆环宽度
                color: [
                  [0.98, '#4DCFFF'], // 已完成进度颜色
                  [1, '#2A3758'] // 未完成进度颜色
                ]
              }
            },
            pointer: {
              show: true,
              length: '70%',
              width: 3
            },
            axisTick: {
              splitNumber: 5, // 每个刻度线的分割数量
              length: 8, // 刻度线长度
              lineStyle: {
                color: '#4DCFFF'
              }
            },
            splitLine: {
              length: 15, // 分割线长度
              lineStyle: {
                color: '#4DCFFF'
              }
            },
            axisLabel: {
              color: '#FFFFFF', // 刻度文字颜色
              distance: 25, // 刻度文字距离
              fontSize: 10
            },
            title: {
              show: false // 隐藏默认的标题
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}',
              fontSize: 24,
              color: '#FFFFFF', // 中心文字颜色
              offsetCenter: [0, '0%']
            },
            data: [
              {
                value: 98, // 当前值
                name: '进度'
              }
            ]
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
