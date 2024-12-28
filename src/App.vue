<script setup>
import Layout from '@/components/common/Layout.vue'
import { onMounted, reactive } from 'vue';
import useCommonStore from '@/store/common/index'
const store = useCommonStore()
let timer;
const style = reactive({
  width: 4800,
  height: 1620,
  transform: "scaleY(1) scaleX(1) translate(-50%, -50%)",
});
const getScale = () => {
  const w = window.innerWidth / style.width;
  const h = window.innerHeight / style.height;
  console.log(window.innerWidth, style.width);
  return { x: w, y: h };
};
const setScale = () => {
  let scale = getScale();
  style.transform =
    "scaleY(" + scale.y + ") scaleX(" + scale.x + ") translate(-50%, -50%)";
};
onMounted(() => {
  setScale();
  /*窗口改变事件*/
  window.addEventListener("resize", function () {
    setScale();
  });
})
</script>
<template>
  <div class="app">
    <div class="appBox" :style="{
      width: `${style.width}px`,
      height: `${style.height}px`,
      transform: `${style.transform}`,
    }">
      <Layout></Layout>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;

  .appBox {
    position: relative;
    width: 100%;
    height: 100%;
    transform-origin: left top;
    position: fixed;
    left: 50%;
    top: 50%;
  }
}
</style>