<script setup>
import Icon from '@/assets/images/icon/icon-bs.png'
import IconReply from '@/assets/images/icon/icon-reply.png'

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['change'])

const items = [
  { label: '按科室', value: '1' },
  { label: '按实验室', value: '2' },
  { label: '重点实验室', value: '3' }
]
const activeItem = ref('1')
const activeChildItem = ref('1')

const changeItem = item => {
  if (activeItem.value == item) {
    activeItem.value = ''
    return
  }
  activeItem.value = item
}

const changeChildItem = (item, childItem) => {
  if (activeChildItem.value == childItem) {
    activeChildItem.value = ''
    return
  }
  activeChildItem.value = childItem
}

const options = {
  color: ['rgba(69, 83, 113, 1)'],
  series: [
    {
      type: 'pie',
      clockWise: true,
      radius: ['50%', '65%'],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      data: [
        {
          value: 80,
          name: '01',
          itemStyle: {
            normal: {
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: '#4BF4CA' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#68A7FF' // 100% 处的颜色
                  }
                ]
              },
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          }
        },
        {
          name: '02',
          value: 20
        }
      ]
    }
  ]
}
const input = ref('')
</script>

<template>
  <section>
    <card-title-left title="实验楼任务完成情况一览" />
    <card-container
      screen
      height="1286px"
      class="my-35px"
    >
      <card-top-title class="mb-51px" />
      <c-input v-model="input" placeholder="输入样本名称或编码"/>
      <div class="py-18px text-24px flex justify-between text-[rgba(255,255,255,0.4)] border-b-2px border-[rgba(255,255,255,0.05)]">
        <span>任务名称/取样编码</span>
        <span>任务进度</span>
      </div>
      <div class="list-cont mt-30px scrollbar-hide">
        <div
          v-for="item in 4"
          :key="item"
          @click="changeItem(item)"
          :class="{ 'list-cont-item-active ': item == activeItem }"
          class="list-cont-item px-40px py-25px duration-300 border border-1px border-[rgba(255,255,255,0.1)] rounded-15px not-last:mb-20px"
        >
          <div class="flex relative justify-between flex-1 h-full">
            <div>
              <div class="flex items-center flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <path
                    d="M5.49167 14.554H17.2667L12.1224 19.6984C11.7113 20.1095 11.7113 20.7841 12.1224 21.1953C12.5335 21.6064 13.1976 21.6064 13.6088 21.1953L20.5557 14.2483C20.9668 13.8372 20.9668 13.1731 20.5557 12.7619L13.6193 5.80444C13.2082 5.39331 12.544 5.39331 12.1329 5.80444C11.7218 6.21556 11.7218 6.87969 12.1329 7.29081L17.2667 12.4457H5.49167C4.91188 12.4457 4.4375 12.9201 4.4375 13.4999C4.4375 14.0796 4.91188 14.554 5.49167 14.554Z"
                    fill="#4E8BE3"
                  />
                </svg>
                <span class="text-28px text-white ml-20px">
                  <span class="max-w-150px truncate">藿香正气液样本</span>
                  <b class="text-21px ml-22px text-[rgba(255,255,255,0.4)]">2024-11-19 16:00</b>
                </span>
              </div>
              <div class="flex items-center justify-between text-[rgba(255,255,255,0.6)] mt-25px text-24px">
                <span class="mr-55px pl-40px">BM00004784013784784</span>
                <span class="flex items-center"><b class="text-32px text-[rgba(255,255,255,0.8)] mr-12px">80</b> <b class="text-18px">%</b></span>
              </div>
            </div>
            <p class="absolute -right-10 top-0 w-200px h-100px">
              <chart-bs-pie :option="options" />
            </p>
          </div>
          <div
            :class="{ 'h-205px': item == activeItem, 'h-0px': item != activeItem }"
            class="overflow-y-auto px-30px mt-20px transition-all ease-in duration-300 scrollbar-hide"
          >
            <div
              v-for="childItem in 3"
              :key="childItem"
              @click.stop="changeChildItem(item, childItem)"
              class="child-item duration-300 h-57px flex items-center justify-between rounded-4px"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M26.4015 24.5335L18.6682 14.2268V8.66683L20.4682 6.4135C20.8149 5.9735 20.5082 5.3335 19.9482 5.3335H12.0549C11.4949 5.3335 11.1882 5.9735 11.5349 6.4135L13.3349 8.66683V14.2268L5.60154 24.5335C4.9482 25.4135 5.57487 26.6668 6.6682 26.6668H25.3349C26.4282 26.6668 27.0549 25.4135 26.4015 24.5335Z"
                    fill="rgba(255,255,255,0.2)"
                  />
                </svg>
                <span class="text-24px text-[rgba(255,255,255,0.6)] w-150px ml-12px truncate">某实验室1</span>
              </div>
              <div class="flex gap-30px items-center">
                <span class="text-20px w-132px text-right truncate text-[rgba(255,255,255,0.6)]">检验项目名称2</span>
                <p class="flex-1 bg-[rgba(0,0,0,0.25)] text-18px w-108px text-center py-10px">
                  <span
                    v-if="childItem == 1"
                    class="text-[#A5FA9F]"
                    >正在检测</span
                  >
                  <span
                    v-if="childItem == 2"
                    class="text-[#4E8BE3]"
                    >已检测</span
                  >
                  <span
                    v-if="childItem == 3"
                    class="text-[rgba(255,255,255,0.6)]"
                    >待检测</span
                  >
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
              >
                <path
                  d="M0.750531 9.18127L4.43653 5.49527L0.750531 1.80927C0.380031 1.43877 0.380031 0.84027 0.750531 0.46977C1.12103 0.0992695 1.71953 0.0992695 2.09003 0.46977L6.45053 4.83027C6.82103 5.20077 6.82103 5.79927 6.45053 6.16977L2.09003 10.5303C1.71953 10.9008 1.12103 10.9008 0.750531 10.5303C0.389531 10.1598 0.380031 9.55177 0.750531 9.18127Z"
                  fill="rgba(255,255,255,0.2)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <detail-link
        @to="emits('change','')"
        title="返回"
        :icon="IconReply"
      />
    </card-container>
  </section>
</template>

<style scoped lang="scss">
.status-item {
  background: linear-gradient(38deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 12px;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-cont {
  flex: 1;
  background: url('@/assets/images/card/chart-bg.png') no-repeat center/cover;
  background-position: 45% 55%;
}
.list-cont {
  background: linear-gradient(38deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  overflow-y: auto;
  height: 870px;
  &-item-active {
    background: linear-gradient(180deg, rgba(52, 71, 95, 0.46) 0%, #294f86 100%);
    box-shadow: inset 0px 4px 30px 0px rgba(81, 149, 220, 0.62);
  }
  &-item:hover {
    cursor: pointer;
    background: linear-gradient(180deg, rgba(52, 71, 95, 0.46) 0%, #294f86 100%);
    box-shadow: inset 0px 4px 30px 0px rgba(81, 149, 220, 0.62);
  }
}
</style>
