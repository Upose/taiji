<script setup>
import Icon from '@/assets/images/icon/icon-bs.png'
import Icon1 from '@/assets/images/icon/icon-rocket.png'

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
    <card-title-right title="业务管理" />
    <card-container transform height="672px" class="my-35px">
      <card-inside-title :icon="Icon" title="今日任务完成情况实时监测" />
      <div class="h-147px flex items-center mb-24px">
        <img
          src="@/assets/images/card/eq-manage.png"
          class="h-full mr-20px"
          alt=""
        />
        <div class="flex justify-between items-center text-24px text-[rgba(255,255,255,0.6)]">
          <div class="w-236px flex flex-col gap-y-32px">
            <p class="text-22px">今日应到<b class="text-white text-24px ml-30px mr-11px">1234</b>人</p>
            <p class="text-22px">今日实到<b class="text-[#95E4B0] text-24px ml-30px mr-11px">1234</b>人</p>
          </div>
          <div class="flex-1 items-center justify-between w-full mt-34px">
            <chart-attend-rate />
          </div>
        </div>
      </div>
      <card-inside-title :icon="Icon1" title="今日任务完成情况实时监测" />
      <div class="flex mt-31px">
        <div class="w-156px h-211px">

        </div>
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
