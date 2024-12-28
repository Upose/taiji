<script setup>
import Header from './Header.vue'
import Content from './Content.vue'
// import Footer from './Footer.vue'
import useCommonStore from '@/store/common/index'
import DialogContent from '@/components/common/DialogContent.vue'
const store = useCommonStore()
const getBg = () => {
  let bgImage = ` linear-gradient(to right, #182946 0%, #05132B00 35%, #05132B00 70%,#182946 100% ),
    linear-gradient(to bottom, #182946 0%, #18294600 166px ),
    linear-gradient(to top, #182946 0%, #18294600 166px)`
  return bgImage
}
ue.interface.ueOpenDialog = (res) => {
  // 
}
ue.interface.ueOpenFloorDialog = (res) => {
  // console.log(res)
}
ue.interface.frameSelect = (res) => {
  if (res) {
    console.log('frameSelect', res)
    store.dialogName = ''
    store.isFrame = false
    ue4("btn", {
      框选: "关闭",
    });

  }
};
</script>
<template>
  <div class="layout">
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-content">
      <Content></Content>
    </div>
    <div class="layout-dialog">
      <DialogContent></DialogContent>
    </div>
    <img class="layout-right_bottom_border" src="@/assets/images/contains/right-bottom-border.png" alt="">
    <img class="layout-right_top_border" src="@/assets/images/contains/right-top-border.png" alt="">
    <img class="layout-left_top_border" src="@/assets/images/contains/left-top-border.png" alt="">
    <img class="layout-left_bottom_border" src="@/assets/images/contains/left-bottom-border.png" alt="">
    <img class="layout-bottom_line" src="@/assets/images/contains/bottom-line.png" alt="">

  </div>

</template>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  background-image: v-bind(getBg());
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  &-header {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  &-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 143px);
  }

  // &-footer {
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   height: 71px;
  // }

  &-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &-left_bottom_border {
    position: absolute;
    bottom: 14px;
    left: 14px;
    pointer-events: none;
  }

  &-right_bottom_border {
    position: absolute;
    bottom: 14px;
    right: 14px;
    pointer-events: none;
  }

  &-left_top_border {
    position: absolute;
    top: 14px;
    left: 14px;
    pointer-events: none;
  }

  &-right_top_border {
    position: absolute;
    top: 14px;
    right: 14px;
    pointer-events: none;
  }

  &-bottom_line {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%);
    pointer-events: none;
  }

}
</style>