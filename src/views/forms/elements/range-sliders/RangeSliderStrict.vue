<script setup>
const value = ref([
  20,
  40,
])
</script>

<template>
  <VRangeSlider
    v-model="value"
    strict
  />
</template>
