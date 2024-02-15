<script setup>
import { register } from "swiper/element/bundle";
register();
defineProps(["images"]);
</script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    slides-per-view="1"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide v-for="swiperImg in images" :key="swiperImg.id">
      <VImg :src="swiperImg.image" cover height="400" />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    events-prefix="swiper-"
    loop="true"
    free-mode="true"
    slides-per-view="4"
  >
    <swiper-slide v-for="swiperImg in images" :key="swiperImg.id">
      <VImg :src="swiperImg.image" height="70" cover />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: white;
}


.mySwiper2 {
  swiper-slide {
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
    padding-block: 0.5rem;
    padding-inline: 0.25rem;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
