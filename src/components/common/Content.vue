<script setup>
import { shallowRef, computed } from 'vue'
import useCommonStore from '@/store/common/index'
import EnvironmentalManagement from '@/components/pages/environmentalManagement/index.vue'
import BusinessManagement from '@/components/pages/businessManagement/index.vue'
import EquipmentManagement from '@/components/pages/equipmentManagement/index.vue'
import Overview from '@/components/pages/overview/index.vue'
import SecurityWarning from '@/components/pages/securityWarning/index.vue'

const store = useCommonStore()
const componentsData = shallowRef({
  EnvironmentalManagement: EnvironmentalManagement,
  BusinessManagement: BusinessManagement,
  EquipmentManagement: EquipmentManagement,
  Overview: Overview,
  SecurityWarning: SecurityWarning
})

</script>
<template>
  <div class="content-box">
    <component :is="componentsData[store.componentName]"></component>
  </div>
</template>
<style lang="scss" scoped>
.content-box {
  width: 100%;
  height: 100%;
  padding: 44px 71px 0px 71px;
  position: relative;

  // &-top { 
  //   position: absolute;
  //   top: 0;
  //   left: 50%; 
  //   transform: translate(-50%);
  //   z-index: 2;
  // }
}
</style>