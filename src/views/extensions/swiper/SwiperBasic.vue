<script setup>
import { register } from 'swiper/element/bundle'
import swiper1 from '@/assets/swiper/colorful-heart.jpg'
import swiper3 from '@/assets/swiper/colorful-wallpaper.jpg'
import swiper2 from '@/assets/swiper/exploding-burger.jpg'
import swiper4 from '@/assets/swiper/fruit-is-word-fruit.jpg'
import swiper5 from '@/assets/swiper/single-tree.jpg'

register()
</script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper3,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        height="300"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
