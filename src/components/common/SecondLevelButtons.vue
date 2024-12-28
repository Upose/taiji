<template>
  <div class="top-box" v-if="props.list.length">
    <div :class="secondActive == item.name ? 'top-box-button active' : 'top-box-button'" v-for="item in props.list"
      :key="item.name" @click="selceted(item)">
      {{ item.name }}
    </div>
  </div>
</template>
<script setup>
import useCommonStore from '@/store/common/index'
import { storeToRefs } from 'pinia';
import { computed } from 'vue'
const props = defineProps(['list'])
const store = useCommonStore()
let { secondActive } = storeToRefs(store)
let list = computed(() => store.secondList || [])

const selceted = (item) => {
  store.$patch(state => {
    state.secondActive = item.name
  })
}
</script>
<style lang="scss" scoped>
.top-box {
  width: 1703px;
  height: 80px;
  display: flex;
  column-gap: 12px;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #257AA300 0%, #257AA37d 50%, #257AA300 100%);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &-button {
    height: 48px;
    padding: 10px 20px;
    color: #DCF4FF;
    font-size: 20px;
    font-family: Regular55;
    background-image: url('@/assets/images/second-button-default.png');
    background-size: 100% 100%;
    cursor: pointer;
  }

  .active {
    font-family: Medium65;
    color: #fff;
    background-image: url('@/assets/images/second-button-active.png');
  }
}
</style>