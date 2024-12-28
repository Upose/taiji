<script setup>
const { title = '' } = defineProps({
  title: String
});
</script>

<template>
  <header class="flex h-50px items-center justify-end">
    <img src="@/assets/images/common/c-title-label-tr.png" alt="">
    <h1 class="font-bold text-32px text-[rgba(255,255,255,0.9)] mx-23px text-38px">{{ title }}</h1>
    <img class="transform rotate-180" src="@/assets/images/common/c-title-holder.png" alt="">
  </header>
</template>

<style scoped lang='scss'></style>