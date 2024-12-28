<script setup>
import UserIcon from '@/assets/images/icon/icon-user.png'


</script>

<template>
  <section>
    <card-title-right title="人员到岗/出勤情况" />
    <card-container screen transform class="mt-35px" height="1286px">
      <card-inside-title :icon="UserIcon" title="今日出勤情况" />
      <div class="h-147px flex items-center mt-40px mb-50px">
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
      <card-inside-title :icon="UserIcon" title="本月出勤趋势图" />
      <chart-area-line class="h-197px mt-40px mb-50px"/>
      <card-inside-title :icon="UserIcon" title="其他人员相关统计指标" />
      <chart-other-person-data class="h-197px mt-40px mb-50px"/>
      <card-inside-title :icon="UserIcon" title="其他人员相关统计指标2" />
      <chart-other-person-data-1 class="h-197px mt-40px"/>
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
