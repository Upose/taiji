<script setup>
import IconCold from '@/assets/images/icon/icon-cold.png'
import IconWarm from '@/assets/images/icon/icon-warm.png'
const menus = [
  { label: '按实验室', value: '1' },
  { label: '按科室', value: '2' }
]

const input = ref('')
</script>

<template>
  <!-- 摄像头预警 -->
  <section>
    <card-title-left title="实验楼环境监测" />
    <card-container
      screen
      height="1286px"
      class="mt-35px"
    >
      <card-top-title :data="menus" />
      <c-input placeholder="请输入实验室名称" v-model="input"/>
      <div class="mt-30px">
        <div
          v-for="item in 7"
          :key="item"
          class="h-128px p-30px flex items-center justify-between border border-1px border-[rgba(255,255,255,0.1)] rounded-15px not-last:mb-20px"
        >
          <p class="self-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M26.4015 24.5335L18.6682 14.2268V8.66683L20.4682 6.4135C20.8149 5.9735 20.5082 5.3335 19.9482 5.3335H12.0549C11.4949 5.3335 11.1882 5.9735 11.5349 6.4135L13.3349 8.66683V14.2268L5.60154 24.5335C4.9482 25.4135 5.57487 26.6668 6.6682 26.6668H25.3349C26.4282 26.6668 27.0549 25.4135 26.4015 24.5335Z" fill="#4E8BE3"/>
            </svg>
          </p>
          <p class="text-[rgba(255,255,255,0.4)] text-26px flex-1 min-w-0 mx-30px self-start">
            <p class="flex gap-30px items-center">
              <span class="text-28px text-white w-150px truncate">实验室名称</span>
              <p class="flex-1 text-26px flex justify-between">
                <span>实际温度</span>
                <span class="ml-30px text-[#A5FA9F]">23.5℃</span>
              </p>
            </p>
            <p class="flex gap-30px mt-15px items-center">
              <span class="text-28px w-150px truncate">F06-A001</span>
              <p class="flex-1 text-26px flex justify-between">
                <span>设定温度</span>
                <span class="ml-30px text-[#4E8BE3]">24℃</span>
              </p>
            </p>
          </p>
          <img class="w-100px h-80px" :src="item % 2 ? IconCold : IconWarm" alt="">
        </div>
      </div>
    </card-container>
  </section>
</template>