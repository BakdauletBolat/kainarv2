<script setup>
const selectedVariant = ref('outlined')

const variant = [
  'solo',
  'solo-inverted',
  'outlined',
  'filled',
  'underlined',
  'solo-filled',
  'plain',
]

const selected = ref()
</script>

<template>
  <VTabs
    v-model="selectedVariant"
    class="mb-6"
  >
    <VTab
      v-for="i in variant"
      :key="i"
      :value="i"
    >
      {{ i }}
    </VTab>
  </VTabs>

  <VCombobox
    v-model="selected"
    label="Combobox"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    :variant="selectedVariant"
  />
</template>
