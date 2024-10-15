<template lang="">
  <h1
    v-if="type === HeadlineTypes.H1"
    class="text-3xl lg:text-4xl mb-8 font-bold"
  >
    <slot />
  </h1>
  <h2
    v-if="type === HeadlineTypes.H2"
    class="text-2xl lg:text-3xl mb-8 font-bold"
  >
    <slot />
  </h2>
  <h3
    v-if="type === HeadlineTypes.H3"
    class="text-xl lg:text-2xl mb-8 font-bold"
  >
    <slot />
  </h3>
  <h4
    v-if="type === HeadlineTypes.H4"
    class="text-lg lg:text-xl mb-8 font-bold"
  >
    <slot />
  </h4>
  <h5
    v-if="type === HeadlineTypes.H5"
    class="text-base lg:text-lg mb-8 font-bold"
  >
    <slot />
  </h5>
  <h6
    v-if="type === HeadlineTypes.H6"
    class="text-base lg:text-lg mb-8 font-bold"
  >
    <slot />
  </h6>
</template>
<script setup lang="ts">
import { HeadlineTypes } from "~/enums/enums";

interface Prop {
  type: HeadlineTypes;
}

defineProps<Prop>();
</script>
