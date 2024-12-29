<script setup>
import Icon from '@/assets/images/icon/icon-bs.png'
import Icon1 from '@/assets/images/icon/icon-rocket.png'

const option = {
  title: {
    text: '{a|' + 75 + '}{c|%}',
    x: 'center',
    y: 'center',
    textStyle: {
      rich: {
        a: {
          fontSize: 24,
          color: '#fff'
        },
        c: {
          fontSize: 16,
          color: '#fff',
          padding: [5, 0, 0, 0]
        }
      }
    }
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
  ]
}
</script>

<template>
  <section>
    <card-title-right title="业务管理" />
    <card-container
      transform
      height="672px"
      class="my-35px"
    >
      <card-inside-title
        :icon="Icon"
        title="今日任务完成情况实时监测"
      />
      <div class="flex items-center my-30px">
        <div class="w-238px">
          <div class="h-190px chart-cont w-full h-full">
            <chart-bs-pie class="w-full" />
          </div>
          <div class="title-bg -mt-10px">检验任务实时进度</div>
        </div>
        <div class="ml-20px">
          <div
            class="title-word-bg text-18px not-last:mb-23px"
            v-for="item in 3"
            :key="item"
          >
            <div class="text-[#C1FD86]">11-27 12:47:32</div>
            <div class="w-230px truncate text-[rgba(255,255,255,0.6)]">XXX实验室已完成XXXX检验</div>
          </div>
        </div>
      </div>
      <card-inside-title
        :icon="Icon1"
        title="今日任务完成情况实时监测"
      />
      <div class="flex items-center mt-30px">
        <div class="w-238px">
          <div class="h-190px chart-cont1 w-full h-full">
            <chart-bs-pie
              :option="option"
              class="w-full"
            />
          </div>
          <div class="title-bg -mt-10px">检验实时效率情况</div>
        </div>
        <div class="ml-20px">
          <div
            class="title-word-bg relative text-18px not-last:mb-23px"
            v-for="item in 3"
            :key="item"
          >
            <div class="text-[rgba(255,255,255,0.6)]">XXX实验室</div>
            <div class="truncate text-[#ECC69F]">90%</div>
            <el-progress
              class="progress absolute bottom-0 left-0 w-full h-2px"
              :show-text="false"
              :percentage="80"
            >
            </el-progress>
          </div>
        </div>
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss">
.title-bg {
  background: url('@/assets/images/card/title-bg.png') no-repeat;
  font-size: 20px;
  color: white;
  text-align: center;
  padding-bottom: 10px;
}
.title-word-bg {
  background: linear-gradient(193deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 12px;
  width: 450px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.chart-cont {
  flex: 1;
  background: url('@/assets/images/card/chart-bg.png') no-repeat center/cover;
  background-position: 45% 55%;
}
.chart-cont1 {
  flex: 1;
  background: url('@/assets/images/card/chart-bg-white.png') no-repeat center/cover;
  background-position: 45% 55%;
}

.progress {
  &:deep(.el-progress-bar__outer) {
    background: transparent;
  }
  &:deep(.el-progress-bar__inner) {
    background: linear-gradient( 270deg, #FFD4B6 0%, #FF8B8B 100%);;
  }
}

</style>
