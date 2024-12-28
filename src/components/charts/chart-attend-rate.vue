<script setup>
import Person from '@/assets/images/card/user-opacity.png'
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        grid: {
          left: 0,
          top: 0,
        },
        series: [
          {
            type: 'scatter',
            data: [
              { value: [0, 0], itemStyle: { color: '#007bff' } },
              { value: [1, 0], itemStyle: { color: '#007bff' } },
              { value: [2, 0], itemStyle: { color: '#007bff' } },
              { value: [3, 0], itemStyle: { color: '#007bff' } },
              { value: [4, 0], itemStyle: { color: '#007bff' } },
              { value: [5, 0], itemStyle: { color: '#007bff' } },
              { value: [6, 0], itemStyle: { color: '#007bff' } },
              { value: [7, 0], itemStyle: { color: '#007bff' } },
              { value: [8, 0], itemStyle: { color: '#00d3ff' } },
              { value: [9, 0], itemStyle: { color: 'gray' } }
            ],
            symbol: Person,
            symbolSize: 36
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
