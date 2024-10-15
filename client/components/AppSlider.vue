<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :space-between="20"
    :loop="true"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide">
      <AppBookBlock />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts"></script>
