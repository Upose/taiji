<!-- 开机率 饼图 -->
<script setup>
import IconBar from '@/assets/images/icon/icon-pie-center.png'

const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        title: {
          text: "{a|" + 75 + "}{c|%}",
          x: "center",
          y: "center",
          textStyle: {
            rich: {
              a: {
                fontSize: 24,
                color: "#fff",
              },
              c: {
                fontSize: 16,
                color: "#fff",
                padding: [5, 0, 0, 0]
              },
            },
          },
        },
        color: ['rgba(69, 83, 113, 1)'],
        series: [
          {
            type: 'pie',
            clockWise: true,
            radius: ['50%', '65%'],
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
      }
    }
  }
})
</script>

<template>
  <v-chart :option="props.option" />
</template>
