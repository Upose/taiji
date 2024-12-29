<script setup>
import Icon from '@/assets/images/icon/icon-eq.png'


</script>

<template>
  <section>
    <card-title-right title="重点设备监测" />
    <card-container screen transform class="mt-35px" height="1286px">
      <card-inside-title :icon="Icon" title="重点设备名称1" />
      <eq-important-monitor-item />
      <card-inside-title :icon="Icon" title="重点设备名称2" />
      <eq-important-monitor-item />
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
