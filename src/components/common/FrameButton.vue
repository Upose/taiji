<template>
  <div class="frame">
    <div :class="store.isFrame ? 'frame-button button-active' : 'frame-button'" @click="frameSwitch()">
      <span class="iconfont icon-frame"></span>
      <span>自定义选框</span>
    </div>
  </div>
</template>
<script setup>
import useCommonStore from '@/store/common/index'
const store = useCommonStore()
const frameSwitch = () => {
  store.isFrame = !store.isFrame
  ue4("btn", {
    框选: store.isFrame ? "打开" : "关闭",
  });
}
</script>
<style lang="scss" scoped>
.frame {
  width: 157px;
  height: auto;

  &-button {
    width: 100%;
    height: 42px;
    column-gap: 10px;
    color: #ffffffcc;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-image: url('@/assets/images/frame-button-bg.png');
    background-size: 100% 100%;
    font-size: 16px;
    cursor: pointer;
  }

  .button-active {
    color: #ffffff;
  }
}
</style>