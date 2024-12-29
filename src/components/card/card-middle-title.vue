<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const active = ref('1')

const change = (item) => {
  active.value = item.value
}
</script>

<template>
  <ul class="menu">
    <li
      :class="{ active: item.value == active }"
      class="menu_item"
      v-for="item in props.data"
      :key="item.value"
      @click="change(item)"
    >
      <span class="z-1 relative">{{ item.label }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu {
  width: 100%;
  font-size: 22px;
  display: flex;
  // justify-content: space-between;
  gap: 45px;
  // padding: 45px 12px;
  color: rgba(255, 255, 255, 0.8);
  &_item {
    position: relative;
    text-align: center;
    line-height: 40px;
    // flex: 1;
    min-width: 190px;
    height: 45px;
    cursor: pointer;
    background: url('@/assets/images/common/c-middle-title-bg1.png') no-repeat center center / 100% 100%;
    &.active {
      background: url('@/assets/images/common/c-middle-title-bg2.png') no-repeat center center / 100% 100%;
    }
  }
}
</style>
