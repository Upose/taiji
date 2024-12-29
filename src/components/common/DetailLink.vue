<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  type: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits(['to'])

</script>

<template>
<div class="flex justify-end items-center mt-40px ">
  <img class="h-23px" src="@/assets/images/card/to-detail-bg.png" alt="">
  <p @click="emits('to')" class="mx-24px text-26px text-[rgba(255,255,255,0.6)] hover:cursor-pointer">{{ props.title }}</p>
  <img :src="props.icon" alt="">
</div>
</template>

<style scoped lang='scss'></style>