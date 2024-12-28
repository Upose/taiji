<script setup>
import 'echarts';
import EChart from 'vue-echarts';

const props = defineProps({
  option: {
    type: Object,
    default: () => { },
  },
  events: {
    type: Object,
    default: () => ({}),
  },
});

const chartInstance = ref(null);

defineExpose({
  getInstance: () => chartInstance.value?.chart,
});
</script>

<template>
  <e-chart
    ref="chartInstance"
    :option="props.option"
    v-on="events"
    autoresize
  />
</template>
