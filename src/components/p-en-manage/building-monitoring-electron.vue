<script setup>
import Icon from '@/assets/images/icon/icon-eq.png'


</script>

<template>
  <section>
    <card-title-right title="重点实验室环境因子监测" />
    <card-container screen transform class="mt-35px" height="1286px">
      <card-inside-title :icon="Icon" title="实验室名称/重点监测因子" />
      <chart-area-line class="h-197px my-40px"/>
      <card-inside-title :icon="Icon" title="实验室名称/重点监测因子" />
      <chart-line class="h-197px my-40px"/>
      <card-inside-title :icon="Icon" title="实验室名称/重点监测因子" />
      <chart-other-person-data class="h-197px my-40px"/>
      <card-inside-title :icon="Icon" title="实验室名称/重点监测因子" />
      <div class="h-197px mt-40px flex gap-30px">
        <chart-gauge-1 class="h-full flex-1" />
        <chart-area-line class="h-full w-465px" />
      </div>
    </card-container>
  </section>
</template>

<style scoped lang="scss"></style>
