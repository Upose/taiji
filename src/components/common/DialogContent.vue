<template>
  <component :is="dialogComponent[dialogName]"></component>
</template>
<script setup>
import useCommonStore from '@/store/common/index'
import { storeToRefs } from 'pinia';
import { shallowRef } from 'vue'
const store = useCommonStore()
let { dialogName } = storeToRefs(store)
const dialogComponent = shallowRef({
})
</script>