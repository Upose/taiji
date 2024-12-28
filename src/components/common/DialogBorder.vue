<template>
  <div class="dialog-border">
    <!-- <img class="dialog-border-close" src="@/assets/images/dialog-close.png" alt="" @click="close()"> -->
    <div class="dialog-border-title">
      <div class="dialog-border-title-text">
        <span class="cn">{{ props.cnTitle }}</span>
        <span class="en">{{ props.enTitle }}</span>
      </div>
    </div>
    <div class="dialog-border-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup>
import useCommonStore from '@/store/common/index'
const store = useCommonStore()
const props = defineProps(['cnTitle', 'enTitle'])
const close = () => {
  store.$patch((state) => {
    state.dialogName = ''
  })
}
</script>
<style lang="scss" scoped>
.dialog-border {
  width: 421px;
  min-height: 382px;
  // background-image: url('@/assets/images/dialog-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  &-close {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }

  &-title { 
    width: 100%;
    height: 38px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    // background-image: url('@/assets/images/dialog-title-line.png');
    // background-repeat: no-repeat;
    // background-size: 100% auto;
    // background-position: left bottom;
    padding-bottom: 10px;
    box-sizing: border-box;

    &-text {
      display: flex;
      flex-direction: column;
      .cn {
        color: #ffffff;
        font-size: 20px;
        font-family: Medium65;
      }

      .en {
        color: #8C8C8C;
        font-size: 12px;
        font-family: Regular55;
      }
    }
  }

  &-content {
    width: 100%;
    height: calc(100% - 38px);
    max-height: 750px;
    // padding-top: 12.15px;
    box-sizing: border-box;
    overflow: auto;

  }

  &-content::-webkit-scrollbar {
    width: 0;
  }
}
</style>