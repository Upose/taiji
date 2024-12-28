<script setup>
const props = defineProps({
  menu: {
    type: [],
    default: () => {
      return [
        { label: '按科室', value: '1' },
        { label: '按实验室', value: '2' },
        { label: '重点实验室', value: '3' }
      ]
    }
  }
})

const active = ref('1')
</script>

<template>
  <ul class="menu mb-20px">
    <li
      :class="{ active: item.value == active }"
      class="menu_item"
      v-for="item in props.menu"
      :key="item.value"
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
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  gap: 14px;
  &_item {
    position: relative;
    text-align: center;
    line-height: 40px;
    flex: 1;
    height: 45px;
    cursor: pointer;
    background: url('@/assets/images/common/c-middle-title-bg1.png') no-repeat center center / 100% 100%;
    &.active {
      background: url('@/assets/images/common/c-middle-title-bg2.png') no-repeat center center / 100% 100%;
    }
  }
}
</style>
