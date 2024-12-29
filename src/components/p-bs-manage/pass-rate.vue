<script setup>
import Icon from '@/assets/images/icon/icon-bs.png'

const items = [
  { label: '按科室', value: '1' },
  { label: '按实验室', value: '2' },
  { label: '重点实验室', value: '3' }
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

const option = {
  title: {
    text: "{a|" + 75 + "}{c|%}",
    x: "center",
    y: "center",
    textStyle: {
      rich: {
        a: {
          fontSize: 24,
          color: "#fff",
        },
        c: {
          fontSize: 16,
          color: "#fff",
          padding: [5, 0, 0, 0]
        },
      },
    },
  },
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
                    color: '#FFD4B6' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#FF8B8B' // 100% 处的颜色
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
  ],
}
const option1 = {
  title: {
    text: "{a|" + 75 + "}{c|%}",
    x: "center",
    y: "center",
    textStyle: {
      rich: {
        a: {
          fontSize: 20,
          color: "#fff",
        },
        c: {
          fontSize: 14,
          color: "#fff",
          padding: [5, 0, 0, 0]
        },
      },
    },
  },
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
                    color: '#FFD4B6' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#FF8B8B' // 100% 处的颜色
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
  ],
}


</script>

<template>
  <section>
    <card-title-right title="实验楼任务完成情况一览" />
    <card-container
      screen
      transform
      height="1286px"
      class="my-35px"
    >
      <card-top-title class="mb-51px" />
      <card-inside-title
        :icon="Icon"
        title="全实验室综合情况"
      />
      <div class="h-230px flex items-center mb-24px">
        <div class="status-item w-400px text-center text-24px text-[rgba(255,255,255,0.6)]">
          全实验室综合平均合格率
        </div>
        <div class="chart-cont w-full h-full">
          <chart-bs-pie :option="option" class="w-full" />
        </div>
      </div>
      <card-inside-title
        :icon="Icon"
        title="各科室/实验室任务完成情况"
      />
      <div class="mt-31px">
        <card-middle-title :data="items"/>
        <div class="list-cont scrollbar-hide">
          <div
            v-for="item in 4"
            :key="item"
            @click="changeItem(item)"
            class="list-cont-item flex items-center px-40px h-125px duration-300 border border-1px border-[rgba(255,255,255,0.1)] rounded-15px not-last:mb-20px"
          >
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
                  fill="#E3D399"
                />
              </svg>
              <span class="text-28px text-white ml-20px">
                <span class="max-w-150px truncate">科室名称1</span>
                <b class="text-21px mx-22px text-[rgba(255,255,255,0.4)]">2024-11-19 16:00</b>
                <span class="text-24px text-[rgba(255,255,255,0.6)]">合格率</span>
              </span>
            </div>
            <p class="w-100px h-100px">
              <chart-bs-pie :option="option1" />
            </p>
          </div>
        </div>
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss">
.status-item {
  background: linear-gradient(38deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 12px;
  padding: 18px 40px;
}
.chart-cont {
  flex: 1;
  background: url('@/assets/images/card/chart-bg-white.png') no-repeat center/cover;
  background-position: 45% 55%;
}
.list-cont {
  background: linear-gradient(38deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  overflow-y: auto;
  height: 622px;
  // &-item-active {
  //   background: linear-gradient(180deg, rgba(52, 71, 95, 0.46) 0%, #294f86 100%);
  //   box-shadow: inset 0px 4px 30px 0px rgba(81, 149, 220, 0.62);
  // }
  // &-item:hover {
  //   cursor: pointer;
  //   background: linear-gradient(180deg, rgba(52, 71, 95, 0.46) 0%, #294f86 100%);
  //   box-shadow: inset 0px 4px 30px 0px rgba(81, 149, 220, 0.62);
  // }
}
</style>
