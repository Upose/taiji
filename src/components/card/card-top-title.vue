<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return [
        { label: '当日', value: '1' },
        { label: '当月', value: '2' },
        { label: '当年', value: '3' }
      ]
    }
  }
})
const active = ref('1')

const emits = defineEmits(['change'])
const change = (item) => {
  active.value = item.value
  emits('change', item)
}
</script>

<template>
  <ul class="menu mb-20px">
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
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  gap: 14px;
  &_item {
    position: relative;
    border-radius: 8px;
    border: 2px solid rgba(34, 83, 140, 0.77);
    box-sizing: border-box;
    text-align: center;
    line-height: 50px;
    flex: 1;
    height: 53px;
    cursor: pointer;
    &.active {
      background: url('@/assets/images/common/c-top-title-bg.png') no-repeat;
      background-size: 100% 120%;
    }
  }
}
</style>
