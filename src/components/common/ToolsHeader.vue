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
// let tabActive = ref('')
const tabChange = (val, index) => {
  // store.legendList = []
  store.changeComponent(index)
  // if (val.footerList && val.footerList.length > 0) {
  // ue4('btn', {
  //   id: val.footerList[0].code
  // })
  // } else if (val.code) {
  ue4('btn', {
    id: val.code
  })
  // }
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
  data.nowTime = data.hour + ":" + data.minute + ':' + data.second
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
  frameList.value = window.frameList
  store.$patch(state => {
    state.frameList = frameList.value
  })
  store.changeComponent(0)
  if (frameList.value[0].code) {
    ue4("btn", {
      id: frameList.value[0].code
    });

  }
  getTime()
  data.timer = setInterval(() => {
    getTime()
  }, 1000)
})


</script>
<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-box">
        <img class="header-left-box-icon" src="@/assets/images/header/header-left-bg-icon1.png" alt="">
        <div class="header-left-box-text">
          <img src="@/assets/images/header/flip-backward.svg" alt="">
          <span>返回首页</span>
        </div>
      </div>
      <img class="header-left-line" src="@/assets/images/header/tool-header-bottom-line.png" alt="">
    </div>
    <div class="header-right">
      <div class="header-right-box">
        <div class="header-right-box-date">{{ data.nowDate
          }}</div>
        <div class="header-right-box-split"></div>
        <div class="header-right-box-clock">{{ data.nowTime }}</div>
        <div class="header-right-box-split"></div>
        <div class="header-right-box-user">
          <div class="user-image">
            <img src="@/assets/pageImages/admin-image.png" alt="">
          </div>
          <span>Admin</span>
        </div>
        <div class="header-right-box-split"></div>
        <div class="header-right-box-out">
          <img src="@/assets/images/header/log-out-icon.png" alt="" @click="loginOut()">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &-left {
    width: 340px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 1px;

    &-box {
      width: 100%;
      height: 62px;
      display: flex;
      align-items: center;
      column-gap: 12px;
      background-image: linear-gradient(to right, #00677E 4%, #0057887d 34%, #00578800 100%), linear-gradient(to right, #3494C3 0%, #1C95BB00 160px);
      background-repeat: no-repeat, no-repeat;
      background-size: 100% 100%, 100% 100%;

      &-icon {
        width: 8px;
        height: 31px;
      }

      &-text {
        display: flex;
        align-items: center;
        column-gap: 10px;
        cursor: pointer;

        &>img {
          width: 24px;
          height: 24px;
        }

        &>span {
          color: #ffffff;
          font-size: 24px;
          font-family: Medium65;
          text-align: 0 4px 4px #02374899;
        }
      }
    }
    &-line{
      width: 100%;
      height: 3px;
    }

  }

  &-right {
    width: 645px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 10px;
    background-size: auto 77px;
    background-position: right bottom;
    background-repeat: no-repeat;

    &-box {
      width: 100%;
      height: 100%;
      display: flex;
      column-gap: 24px;
      justify-content: flex-end;
      align-items: center;
      padding-right: 14px;

      &-date {
        font-size: 20px;
        color: #ffffff;
        font-family: Regular55;
      }

      &-clock {
        font-size: 20px;
        color: #ffffff;
        font-family: SemiBold75;
      }

      &-user {
        font-size: 20px;
        color: #ffffff;
        font-family: Medium65;
        display: flex;
        align-items: center;
        column-gap: 10px;

        .user-image {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          &>img {
            width: 100%;
            height: 100%;
          }

        }
      }

      &-out {
        cursor: pointer;
      }

      &-split {
        width: 1px;
        height: 20px;
        background-color: #DCF4FF66;
      }
    }

  }


}
</style>