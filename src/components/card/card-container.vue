<script setup>
const props = defineProps({
  width: {
    type: String,
    default: '832px'
  },
  height: {
    type: String,
    default: '577px'
  },
  transform: {
    type: Boolean,
    default: false
  },
  screen: {
    type: Boolean,
    default: false
  }
})

const backgroundClass = computed(() => {
  if (props.screen && props.transform) return 'bg-card-screen-tr';
  if (props.screen) return 'bg-card-screen';
  if (props.transform) return 'bg-card-tr';
  return 'bg-card';
});
</script>

<template>
  <div
   :class="[backgroundClass, 'pl-69px pr-51px pt-41px pb-51px']"
    :style="{ width: props.width, height: props.height }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.bg-card {
  background: url('@/assets/images/common/c-card-bg.png') no-repeat center center / 100% 100%;
}
.bg-card-tr {
  background: url('@/assets/images/common/c-card-bg-tr.png') no-repeat center center / 100% 100%;
}
.bg-card-screen {
  background: url('@/assets/images/common/c-card-bg-screen.png') no-repeat center center / 100% 100%;
}
.bg-card-screen-tr {
  background: url('@/assets/images/common/c-card-bg-screen-tr.png') no-repeat center center / 100% 100%;
}
</style>
