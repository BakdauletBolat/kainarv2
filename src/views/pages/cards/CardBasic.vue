<script setup>
import bookPen from '@/assets/pages/book-pen.png'
</script>

<template>
  <VCard
    title="Card Title"
    subtitle="Subtitle"
  >
    <VImg
      :src="bookPen"
      height="160"
      cover
    />

    <VCardText>
      Muffin oat cake macaroon bonbon macaroon pie marshmallow pie.
    </VCardText>
  </VCard>
</template>
