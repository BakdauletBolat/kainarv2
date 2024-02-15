<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  followBack: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:followBack'])
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardItem>
          <template #prepend>
            <VAvatar :image="props.avatar" />
          </template>
          <VCardTitle class="text-base">
            {{ props.name }}
          </VCardTitle>
          <VCardSubtitle class="d-flex align-center gap-1">
            <VIcon icon="mdi-map-marker-outline" />
            <span>{{ props.location }}</span>
          </VCardSubtitle>

          <template #append>
            <VBtn
              size="small"
              variant="tonal"
              :color="props.followBack ? 'success' : 'primary'"
              @click="emit('update:followBack', !props.followBack)"
            >
              {{ props.followBack ? 'Following' : 'Follow' }}
            </VBtn>
          </template>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>
