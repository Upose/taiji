<script setup>
import EqIcon from '@/assets/images/icon/icon-eq.png'

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
    <card-title-left title="设备管理" />
    <card-container class="my-35px">
      <card-inside-title :icon="EqIcon" title="设备在线情况" />
      <div class="h-147px flex items-center mb-24px">
        <img
          src="@/assets/images/card/eq-manage.png"
          class="h-137px w-142px mr-20px"
          alt=""
        />
        <div class="flex h-full flex-1 justify-between items-center text-24px text-[rgba(255,255,255,0.6)]">
          <div class="w-236px flex flex-col gap-y-32px">
            <p class="text-22px">今日应到<b class="text-white text-24px ml-30px mr-11px">1234</b>人</p>
            <p class="text-22px">今日实到<b class="text-[#95E4B0] text-24px ml-30px mr-11px">1234</b>人</p>
          </div>
          <chart-hut-percent class="w-105px"/>
          <div>
            <p class="text-white text-28px mb-32px text-right">10.2 <b class="text-24px">%</b></p>
            <p class="text-rgba[255,255,255,0.6] text-24px">实时在线率</p>
          </div>
        </div>
      </div>
      <card-inside-title :icon="EqIcon" title="设备在线趋势" />
      <div class="flex h-200px mt-31px">
        <chart-area-line />
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
