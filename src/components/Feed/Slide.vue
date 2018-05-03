<template>
  <div class="slide">
    <img v-bind:src="slide.src" alt="">
  </div>
</template>

<script>
export default {
  props: {
    slide: [Object]
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
.slide {
  display: inline-block;
}
</style>
