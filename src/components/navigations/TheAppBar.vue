<template>
  <v-app-bar
    density="compact"
    prominent
    color="background"
    elevation="0"
    flat
  >
    <VBtn v-if="mainScreen" @click="drawer = !drawer">
      <VIcon icon="mdi-menu" size="20"/>
      {{ appbarTitle }}
    </VBtn>
    <VBtn
      v-if="!mainScreen"
      @click="$router.back()"
      prepend-icon="mdi-chevron-left"
    >
      {{ appbarTitle }}
    </VBtn>

    <VSpacer/>
    <VBtn v-if="mainScreen" icon="mdi-gift" to="/giving" color="primary"/>

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
  mainScreen : {
    type: Boolean,
    required: true,
  }
})

const appState = useAppState()
const {drawer} = storeToRefs(appState)
</script>
