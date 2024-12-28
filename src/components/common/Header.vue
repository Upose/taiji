<script setup>
import { ref, reactive, onUnmounted, onMounted } from 'vue';
import useCommonStore from '@/store/common/index'
const store = useCommonStore()
const data = reactive({
  week: '',
  year: '',
  month: '',
  day: '',
  hour: '',
  minute: '',
  second: '',
  nowDate: '',
  nowTime: '',
  timer: null,
  weatherData: {}
})
let frameList = ref([])
let leftTabs = [
  {
    name: '业务管理',
    componentName: 'BusinessManagement'
  },
  {
    name: '设备管理',
    componentName: 'EquipmentManagement'
  },
]
let rightTabs = [
  {
    name: '环境管理',
    componentName: 'EnvironmentalManagement'
  },
  {
    name: '安防管理',
    componentName: 'SecurityWarning'
  },
]
let tabActive = ref('')
const tabChange = (val, index) => {
  tabActive.value = val.name
  store.$patch(state => {
    state.headerActive = val.name
    state.componentName = val.componentName
  })
  ue4('customized', {
    一级: val.name
  })
}
// const goBack = () => {
//   store.headerActive = ''
//   ue4('btn', {
//     零级: '首页'
//   })
// } 
const check = (i) => {
  const num = i < 10 ? "0" + i : i;
  return `${num}`;
}
const getTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const weekDays = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const week = weekDays[date.getDay()];
  data.week = week;
  data.year = year;
  data.month = check(month);
  data.day = check(day);
  data.hour = check(hour);
  data.minute = check(minute);
  data.second = check(second);
  data.nowDate = year + "-" + data.month + "-" + data.day;
  data.nowTime = data.hour + ":" + data.minute
}

const loginOut = () => {
  ue4("btn", {
    loginOut: "yes",
  });
}

onUnmounted(() => {
  clearInterval(data.timer)
})
onMounted(() => {
  getTime()
  data.timer = setInterval(() => {
    getTime()
  }, 1000)
})


</script>
<template>
  <div class="header">
    <div class="pt-70px flex items-center w-400px">
      <img src="@/assets/images/header/header-cloud.png" alt="">
      <span class="text-[rgba(255,255,255,0.8)] font-bold text-32px ml-32px">32.5°C</span>
    </div>
    <div class="header-middle">
      <div class="header-middle-tabs">
        <div :class="tab.name == store.headerActive ? 'tab tab-active' : 'tab cursor-pointer'" v-for="tab in leftTabs" :key="tab.name"
          @click="tabChange(tab)">
          {{ tab.name }}
        </div>
      </div>
      <div class="flex items-center mx-300px">
        <img src="@/assets/images/header/header-title-logo.png" alt="">
        <h1 class="ml-38px text-white glow-text">太极涪药科创中心智慧实验室</h1>
      </div>
      <div class="header-middle-tabs">
        <div :class="tab.name == store.headerActive ? 'tab tab-active' : 'tab cursor-pointer'" v-for="tab in rightTabs" :key="tab.name"
          @click="tabChange(tab)">{{ tab.name }}</div>
      </div>
    </div>
    <div class="header-right">
      <span>{{ data.nowDate }}</span>
      <span>{{ data.nowTime }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 143px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-image: url('@/assets/images/header/header-title-bg.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center top;
  padding: 0 71px;


  &-middle {
    display: flex;
    column-gap: 30px;

    &-tabs {
      display: flex;
      column-gap: 127px;
      padding-top: 20px;

      .tab {
        width: 357px;
        height: 100px;
        background-image: url('@/assets/images/header/header-tab-bg.png');
        background-position: center top;
        background-size: auto auto;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        font-size: 36px;
        font-family: HYWenHei;
        padding-top: 5px;
        color: #FFFFFFcc;
      }

      .tab-active {
        color: #fff;
        background-image: url('@/assets/images/header/header-tab-active-bg.png');
      }
    }
  }

  &-right {
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    column-gap: 26px;
    justify-content: flex-end;
    padding-top: 69px;

    &>span:nth-child(1) {
      color: #FFFFFFcc;
      font-size: 32px;
      font-family: Alibaba-PuHuiTi-Bold;
    }

    &>span:nth-child(2) {
      color: #FFFFFF;
      font-size: 50px;
      font-family: Alibaba-PuHuiTi-Bold;
    }

  }
}
.glow-text {
  color: white; /* 字体颜色 */
  font-size: 50px; /* 字体大小 */
  text-shadow: 0px 0px 22px rgba(0,167,255,0.76), 0px 4px 4px rgba(0,0,0,0.25);
}
</style>