<!-- 开机率 饼图 -->
<script setup>
import IconBar from '@/assets/images/icon/icon-pie-center.png'

const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        width: '100%',
        height: '100%',
        color: ['rgba(69, 83, 113, 1)'],
        series: [
          {
            type: 'pie',
            clockWise: true,
            radius: ['45%', '65%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: 80,
                name: '01',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: '#4BF4CA' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#68A7FF' // 100% 处的颜色
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: '02',
                value: 20
              }
            ]
          }
        ],
        graphic: {
          elements: [
            {
              type: 'image', // 使用图片作为中间图标
              left: 'center',
              top: 'center',
              z: 10,
              style: {
                image: IconBar, // SVG 图标的 Base64 编码
                width: 20,
                height: 20
              }
            }
          ]
        }
      }
    }
  }
})
</script>

<template>
  <v-chart :option="props.option" />
</template>
