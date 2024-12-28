<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h1 class="inline-flex gap-28px items-center">
    <img class="w-26px h-26px" :src="props.icon" alt="">
    <span class="text-26px text-[rgba(255,255,255,0.8)]">{{ props.title }}</span>
  </h1>
</template>

<style scoped lang='scss'></style>