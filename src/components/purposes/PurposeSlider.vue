<template>
  <v-card
    class="my-2 ml-2"
    height="200"
    width="200"
    :image="img"
    :to="route"
  >
    <div class="fill-height bottom-gradient d-flex align-end">
      <h3 class="text-white ma-2">{{title}}</h3>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    required: true,
    type: String,
  },
  route: {
    required: true,
    type: String,
  },
})
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.25) 0%,
    transparent 250px
  );
}
</style>
