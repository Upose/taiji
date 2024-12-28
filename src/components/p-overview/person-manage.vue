<script setup>
import UserIcon from '@/assets/images/icon/icon-user.png'

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
    <card-title-left title="人员管理" />
    <card-container class="my-35px">
      <card-inside-title :icon="UserIcon" title="今日出勤情况" />
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
      <card-inside-title :icon="UserIcon" title="人员相关指标" />
      <div class="flex mt-31px">
        <div class="w-156px h-211px">
          <ul class="flex flex-col gap-28px">
            <li
              class="text-14px rounded-7px border-1 flex items-center p-8px text-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.05)]"
            :class="{ 'border-[#4EFEE9] text-[#4EFEE9]': item1Active === item.value }"
              v-for="item in items1"
              :key="item.value"
            >
            <svg v-if="item.value === item1Active" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
              <path d="M7.27734 2C3.96534 2 1.27734 4.688 1.27734 8C1.27734 11.312 3.96534 14 7.27734 14C10.5893 14 13.2773 11.312 13.2773 8C13.2773 4.688 10.5893 2 7.27734 2ZM7.27734 12.8C4.62534 12.8 2.47734 10.652 2.47734 8C2.47734 5.348 4.62534 3.2 7.27734 3.2C9.92934 3.2 12.0773 5.348 12.0773 8C12.0773 10.652 9.92934 12.8 7.27734 12.8Z" fill="#4EFEE9"/>
              <path d="M7.27734 11C8.9342 11 10.2773 9.65685 10.2773 8C10.2773 6.34315 8.9342 5 7.27734 5C5.62049 5 4.27734 6.34315 4.27734 8C4.27734 9.65685 5.62049 11 7.27734 11Z" fill="#4EFEE9"/>
            </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M7.27734 1.67999C3.96534 1.67999 1.27734 4.36799 1.27734 7.67999C1.27734 10.992 3.96534 13.68 7.27734 13.68C10.5893 13.68 13.2773 10.992 13.2773 7.67999C13.2773 4.36799 10.5893 1.67999 7.27734 1.67999ZM7.27734 12.48C4.62534 12.48 2.47734 10.332 2.47734 7.67999C2.47734 5.02799 4.62534 2.87999 7.27734 2.87999C9.92934 2.87999 12.0773 5.02799 12.0773 7.67999C12.0773 10.332 9.92934 12.48 7.27734 12.48Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
              <p class="ml-20px">统计项目</p>
            </li>
          </ul>
        </div>
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
