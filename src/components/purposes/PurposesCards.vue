<template>
  <v-img :src="img" :options="{threshold: 0}" eager>
    <div v-if="title" class="fill-height bottom-gradient d-flex align-end">
      <VCardTitle class="text-white">{{ title }}</VCardTitle>
    </div>
  </v-img>
  <VCardText>{{ text }}</VCardText>
  <v-card-actions v-if="btn">
    <VSpacer/>
    <VBtn :color="color" @click="$emit('togglerBtn')">{{ btn }}</VBtn>
  </v-card-actions>
</template>

<script setup>
import {defineEmits} from 'vue'

defineProps({
  title: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    required: true,
  },
  color: {
    type: String,
    default: 'violet',
  },
  btn: {
    type: String,
    required: false,
  },
})
defineEmits(['togglerBtn'])
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 90px
  );
}
</style>
