<script setup>
import Icon from '@/assets/images/icon/icon-eq.png'

const items = [
  { label: '按设备类型', value: '1' },
  { label: '按科室', value: '2' }
]

const activeItem = ref('1')
const activeChildItem = ref('1')

const changeItem = (item) => {
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
</script>

<template>
  <section>
    <card-title-left title="实验楼设备一览" />
    <card-container
      screen
      height="1286px"
      class="my-35px"
    >
      <card-inside-title
        :icon="Icon"
        title="设备整体运行情况"
      />
      <div class="h-147px flex items-center mb-60px mt-41px">
        <img
          src="@/assets/images/card/eq-manage.png"
          class="h-122px w-147px mr-20px"
          alt=""
        />
        <div class="flex items-center text-24px flex-1 text-[rgba(255,255,255,0.6)]">
          <div class="mr-48px">
            <p class="mb-32px">今日应到<b class="text-white text-24px ml-30px mr-11px">1234</b>人</p>
            <p>今日实到<b class="text-[#95E4B0] text-24px ml-30px mr-11px">1234</b>人</p>
          </div>
          <div class="flex items-center flex-shrink-0 justify-between flex-1">
            <div class="flex-1 h-105px">
              <chart-hut-percent />
            </div>
            <div class="flex-1">
              <p class="mb-32px text-right">
                <b class="text-28px text-white mr-12px">76.8</b>
                <span class="text-[rgba(255,255,255,0.6)]">%</span>
              </p>
              <p class="text-right">实时开机率</p>
            </div>
          </div>
        </div>
      </div>
      <card-inside-title
        :icon="Icon"
        title="设备整体运行情况"
      />
      <div class="mt-60px">
        <card-middle-title :data="items" />
        <div class="list-cont scrollbar-hide">
          <div
            v-for="item in 5"
            :key="item"
            @click="changeItem(item)"
            :class="{'list-cont-item-active ':item == activeItem}"
            class="list-cont-item duration-300 border border-1px border-[rgba(255,255,255,0.1)] rounded-15px not-last:mb-20px"
          >
            <div class="flex items-center justify-between">
              <img
                class="w-144px h-114px"
                src="@/assets/images/card/eq-list-left.png"
                alt=""
              />
              <div class="flex justify-between flex-1">
                <p class="flex items-center flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <path
                      d="M5.49167 14.554H17.2667L12.1224 19.6984C11.7113 20.1095 11.7113 20.7841 12.1224 21.1953C12.5335 21.6064 13.1976 21.6064 13.6088 21.1953L20.5557 14.2483C20.9668 13.8372 20.9668 13.1731 20.5557 12.7619L13.6193 5.80444C13.2082 5.39331 12.544 5.39331 12.1329 5.80444C11.7218 6.21556 11.7218 6.87969 12.1329 7.29081L17.2667 12.4457H5.49167C4.91188 12.4457 4.4375 12.9201 4.4375 13.4999C4.4375 14.0796 4.91188 14.554 5.49167 14.554Z"
                      fill="#E3D399"
                    />
                  </svg>
                  <span class="text-28px text-white w-150px truncate ml-30px">生产设备</span>
                </p>
                <p class="text-[rgba(255,255,255,0.6)] text-26px min-w-0 mx-30px ">
                  <b class="text-[#A5FA9F]">23.5</b>
                  &nbsp;/&nbsp;
                  <b>23.5</b>
                </p>
              </div>
            </div>
            <div 
              :class="{'h-205px':item== activeItem,'h-0px':item != activeItem}"
              class="overflow-y-auto px-30px transition-all ease-in duration-300 scrollbar-hide">
              <div
                v-for="childItem in 3"
                :key="childItem"
                @click.stop="changeChildItem(item,childItem)"
                :class="{'child-item-active':item == activeItem && childItem == activeChildItem }"
                class="child-item duration-300 pl-30px pr-10px h-57px flex items-center justify-between rounded-4px"
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
                      fill="#4E8BE3"
                    />
                  </svg>
                  <span class="text-24px text-white w-200px ml-12px truncate">设备名字/编码</span>
                </div>
                <div class="flex gap-30px items-center">
                  <span class="text-20px text-[rgba(255,255,255,0.6)]">实验室/房间编号</span>
                  <p class="flex-1 bg-[rgba(0,0,0,0.25)] text-18px px-26px py-10px">
                    <span v-if="childItem == 1" class="text-[#A5FA9F]">运行中</span>
                    <span v-if="childItem == 2" class="text-[#ECC69F]">故障中</span>
                    <span v-if="childItem == 3" class="text-[rgba(255,255,255,0.6)]">停机中</span>
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
                    :fill="childItem == activeChildItem ? '#4E8BE3' : 'rgba(255,255,255,0.4)'"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss">
.list-cont {
  background: linear-gradient(38deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  overflow-y: auto;
  height: 790px;
  &-item-active {
    background: linear-gradient(180deg, rgba(52, 71, 95, 0.46) 0%, #294f86 100%);
    box-shadow: inset 0px 4px 30px 0px rgba(81, 149, 220, 0.62);
  }
  &-item:hover {
    cursor: pointer;
    background: linear-gradient(180deg, rgba(52, 71, 95, 0.46) 0%, #294f86 100%);
    box-shadow: inset 0px 4px 30px 0px rgba(81, 149, 220, 0.62);
  }
  .child-item{
    &:hover{
      background: linear-gradient(180deg, rgba(51, 98, 211, 0.27) 0%, rgba(78, 124, 231, 0.52) 100%);
    }
    &-active {
      background: linear-gradient(180deg, rgba(51, 98, 211, 0.27) 0%, rgba(78, 124, 231, 0.52) 100%);
    }
  }
}
</style>
