<script setup>
import Icon from '@/assets/images/icon/icon-bs.png'

const items1 = [
  { label: '统计项目', value: '1' },
  { label: '统计项目', value: '2' },
  { label: '统计项目', value: '3' },
  { label: '统计项目', value: '4' }
]
const item1Active = ref('1')
</script>

<template>
  <section>
    <card-title-right title="环境管理" />
    <card-container transform height="491px" class="my-35px">
      <card-inside-title :icon="Icon" title="实验室环境综合情况" />
      <div class="mt-34px">
        <div class="flex justify-between gap-90px">
          <div class="flex-1 dashboard-bg">
            <chart-dashboard class="h-160px"/>
            <div class="text-center text-20px text-white">因子1</div>
          </div>
          <div class="flex-1 dashboard-bg">
            <chart-dashboard class="h-160px"/>
            <div class="text-center text-20px text-white">因子1</div>
          </div>
          <div class="flex-1 dashboard-bg">
            <chart-dashboard class="h-160px"/>
            <div class="text-center text-20px text-white">因子1</div>
          </div>
        </div>
        <chart-line class="h-150px mt-30px"/>
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss">
.dashboard-bg {
  background: url('@/assets/images/card/chart-dashboard-bg.png') no-repeat center/ 100% 80%;
  background-position: 100% 0%;
}
</style>
