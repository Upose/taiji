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
    <card-title-left title="实验楼任务完成情况一览" />
    <card-container height="1286px" class="my-35px">
      <card-top-title class="mb-51px" />
      <card-inside-title :icon="Icon" title="整体任务完成情况" />
      <div class="h-147px flex items-center mb-24px">
        <img
          src="@/assets/images/card/user-manage.png"
          class="h-full mr-20px"
          alt=""
        />
        <div class="items-center text-24px text-[rgba(255,255,255,0.6)]">
          <div class="flex h-24px">
            <p class="text-22px">今日应到<b class="text-white text-24px ml-30px mr-11px">1234</b>人</p>
            <p class="text-22px ml-65px">今日实到<b class="text-[#95E4B0] text-24px ml-30px mr-11px">1234</b>人</p>
          </div>
          <div class="flex h-24px items-center justify-between w-full mt-34px">
            <p>出勤率</p>
            <div class="flex-1 mx-62px h-24px">
              <chart-attend-rate />
            </div>
            <p><b class="text-28px text-white">99.2</b>&nbsp;%</p>
          </div>
        </div>
      </div>
      <card-inside-title :icon="Icon" title="各科室/实验室任务完成情况" />
      <div class="flex mt-31px">
        <card-middle-title />
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
