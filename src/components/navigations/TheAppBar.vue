<template>
  <v-app-bar
    density="compact"
    prominent
    color="background"
    elevation="0"
    flat
  >
    <VBtn @click="drawer = !drawer">
      <VIcon icon="mdi-menu" size="20"/>
      {{ appbarTitle }}
    </VBtn>

    <VSpacer/>
    <VBtn icon="mdi-gift" to="/giving" color="info"/>

  </v-app-bar>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useAppState} from '@/store/app.store'

defineProps({
  appbarTitle: {
    type: String,
    default: 'МБВ',
  },
})

const appState = useAppState()
const {drawer} = storeToRefs(appState)
</script>
