<!-- 出勤趋势折线图 -->
<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // 提示框背景色
          borderWidth: 0,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          formatter: params => {
            const data = params[0]
            return `
        <div style="text-align: center;">
          <div>因子含量 <span style="color: #47d8a6; font-size: 16px;">${data.value}%</span></div>
          <div style="text-align: left;">${data.axisValue}</div>
        </div>
      `
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['01', '02', '03', '04', '05', '06', '07'],
          axisLine: {
            lineStyle: {
              color:'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12
          }
        },
        grid: {
          left: '0', 
          right: '30px',
          top: '3%',
          bottom: '1%', 
          containLabel: true 
        },
        series: [
          {
            type: 'line',
            data: [5, 15, 10, 8, 17, 12, 7],
            smooth: true,
            lineStyle: {
              color: '#86FDFD', 
              // color: '#4EA7F9', // 蓝色
              width: 2
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(134,253,253,0.35)' },
                  { offset: 1, color: 'rgba(37,190,255,0)' }
                ],

                // 蓝色
                // colorStops: [
                //   { offset: 0, color: 'rgba(78,167,249,0.64)' },
                //   { offset: 1, color: 'rgba(78,167,249,0)' }
                // ]
              }
            },
            emphasis: {
              symbol: 'circle',
              itemStyle: {
                color: '#47d8a6', // 高亮节点颜色
                borderColor: '#fff', // 高亮节点边框颜色
                borderWidth: 2
              }
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
