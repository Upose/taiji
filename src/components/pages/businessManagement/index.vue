<script setup>

const currentDetailsId = ref('')

const change = (id) => {
  currentDetailsId.value = id
}
</script>

<template>
  <div class="w-full h-full flex justify-between">
    <div>
      <finish-status @change="change" v-show="!currentDetailsId"/>
      <finish-status-details @change="change" v-show="currentDetailsId"/>
    </div>
    <pass-rate />
  </div>
</template>