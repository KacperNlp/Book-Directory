<template>
  <article
    class="flex flex-col md:flex-row gap-6 lg:gap-12 items-center border rounded-md shadow-lg p-4 lg:p-6"
  >
    <div>
      <slot name="user"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </article>
</template>
