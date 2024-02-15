<template>
<div>
    <v-carousel
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</div>
</template>
<style>
.v-window:not(.v-stepper-window) {
    margin-block: 0;
    padding-block: 0;
}
</style>
<script setup>

const colors = [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ]
       const slides = [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ];

</script>
