<script setup>
import Person from '@/assets/images/card/user-opacity.png'
import PersonFill from '@/assets/images/card/user-fill.png'
// import echarts from 'echarts'
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return  {
        grid: {
          left: 0,
          right: 0,
        },
        xAxis: {
          max: 12, // 设置头像的总数量
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            inverse: false,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          // 背景图
          {
            type: 'pictorialBar',
            symbol: `image://${Person}`, // 使用导入的图片路径
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolSize: 22.5,
            symbolBoundingData: 12, // 头像总数量
            itemStyle: {
              color: 'rgba(255, 255, 255, 0.3)' // 背景颜色（灰色头像）
            },
            data: [12],
            z: 5 // 背景层级
          },
          // 填充图
          {
            type: 'pictorialBar',
            symbol: `image://${PersonFill}`, // 有颜色的头像图案路径
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolSize: 22.5,
            symbolClip: true,
            symbolBoundingData: 12, // 头像总数量
            itemStyle: {
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
              }
            },
            data: [8], // 根据比例填充的数量
            z: 10 // 填充层级
          }
        ]
      }
    }
  }
})

</script>

<template>
  <V-chart :option="props.option" />
</template>
