<script setup>
const menus = [
  { label: '按摄像头', value: '1' },
  { label: '按科室', value: '2' }
]
</script>

<template>
  <!-- 摄像头预警 -->
  <section>
    <card-title-left title="AI摄像头及视频预警" />
    <card-container
      screen
      height="1286px"
      class="mt-35px"
    >
      <card-top-title :data="menus" />
      <div class="flex gap-30px flex-shrink-0 flex-wrap justify-between">
        <div
          class="w-328px"
          v-for="item in 4"
          :key="item"
        >
          <p class="flex items-center flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <path
                d="M26.79 13.9699V27.8299H9.465V13.9699H26.79ZM28.5225 10.5049H7.7325C6.77962 10.5049 6 11.2845 6 12.2374V29.5624C6 30.5153 6.77962 31.2949 7.7325 31.2949H28.5225C29.4754 31.2949 30.255 30.5153 30.255 29.5624V23.4986L37.185 30.4286V11.3711L30.255 18.3011V12.2374C30.255 11.2845 29.4754 10.5049 28.5225 10.5049Z"
                fill="#53C3D0"
              />
            </svg>
            <span class="text-26px flex-1 min-w-0 truncate mx-24px text-[rgba(255,255,255,0.6)]">实时预警</span>
            <span class="text-30px text-[#4E8BE3]">F-5</span>
          </p>
          <p class="rounded-8px border-2 border-[#6391BE] box-border h-164px mt-16px"></p>
        </div>
      </div>
      <div class="mt-30px">
        <header class="py-11px border-b-2px border-[rgba(255,255,255,0.05)] flex justify-between text-[rgba(255,255,255,0.4)] text-24px">
          <p class="px-20px">AI摄像头告警事件</p>
          <p class="px-20px">设备编号</p>
          <p class="px-20px">设备位置</p>
        </header>
        <div class="mt-28px">
          <div
            v-for="item in 5"
            :key="item"
            class="h-90px px-30px flex items-center justify-between border border-1px border-[rgba(255,255,255,0.1)] rounded-15px not-last:mb-20px"
          >
            <p class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g opacity="0.7">
                  <path
                    d="M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z"
                    fill="#ECC69F"
                  />
                </g>
              </svg>
              <span class="text-28px text-[rgba(255,255,255,0.8)] ml-30px">异常抓拍</span>
            </p>
            <p class="flex gap-30px text-[rgba(255,255,255,0.4)] text-28px">
              <span>摄像头005</span>
              <span class="mx-30px">F15-023</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g opacity="0.7">
                  <path
                    d="M8.0125 7.50098L6.25 9.26348L11.975 15.001L6.25 20.7385L8.0125 22.501L15.5125 15.001L8.0125 7.50098Z"
                    fill="#4E8BE3"
                  />
                  <path
                    d="M16.25 7.50098L14.4875 9.26348L20.2125 15.001L14.4875 20.7385L16.25 22.501L23.75 15.001L16.25 7.50098Z"
                    fill="#4E8BE3"
                  />
                </g>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
