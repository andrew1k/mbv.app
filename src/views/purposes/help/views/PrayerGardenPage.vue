<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <purposes-cards :img="garden" :text="text" title="«Молитвенный сад»" btn="Молитвенная поддержка" @toggler-btn="router.push('/purposes/help/prayerSupport')" />
    </v-card>
  </v-card>
</template>

<script setup>
import PurposesCards from '@/components/purposes/PurposesCards.vue'
import garden from '@/assets/helpPics/Garden.jpg'
import {ref} from 'vue'
import router from '@/router'

const text = ref(`Это место, где каждое воскресенье после богослужений можно с молитвенными служителями вместе помолиться и отдать свои нужды Богу`)
</script>
