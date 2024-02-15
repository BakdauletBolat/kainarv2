<script setup>
import EcommerceAreaChart from './EcommerceAreaChart.vue'
import EcommerceCarousel from './EcommerceCarousel.vue'
import EcommerceCrypto from './EcommerceCrypto.vue'
import EcommerceFloating from './EcommerceFloating.vue'
import EcommercePost from './EcommercePost.vue'
import EcommerceTask from './EcommerceTask.vue'
import EcommerceTimeline from './EcommerceTimeline.vue'

/* this is just demo purpose to demonstrate how suspense loader work when you put top level await function
you can simply remove it */
await new Promise(resolve => setTimeout(() => resolve(true), 1000))
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardText class="d-flex align-center justify-space-between">
          <div>
            <h4 class="text-h4">
              $92
            </h4>
            <span class="font-weight-semibold">Earnings</span>
          </div>

          <VProgressCircular
            size="56"
            color="warning"
            model-value="35"
          />
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardItem>
          <template #prepend>
            <VAvatar
              color="primary"
              rounded
            >
              <VIcon icon="mdi-cart-plus" />
            </VAvatar>
          </template>
          <VCardTitle>200.32k</VCardTitle>
          <VCardSubtitle>New Orders</VCardSubtitle>
        </VCardItem>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardText class="d-flex align-center justify-space-between">
          <div>
            <h4 class="text-h4">
              335
            </h4>
            <span class="font-weight-semibold">Subscribers</span>
          </div>

          <VProgressCircular
            size="56"
            color="info"
            model-value="20"
          />
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardItem>
          <template #prepend>
            <VAvatar
              color="error"
              rounded
            >
              <VIcon icon="mdi-cancel" />
            </VAvatar>
          </template>
          <VCardTitle>8,649</VCardTitle>
          <VCardSubtitle>Cancelled Orders</VCardSubtitle>
        </VCardItem>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <EcommerceCarousel />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <EcommerceCrypto />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <EcommerceTimeline />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <EcommercePost />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <EcommerceTask />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <EcommerceAreaChart />
    </VCol>

    <VCol cols="12">
      <EcommerceFloating />
    </VCol>
  </VRow>
</template>
