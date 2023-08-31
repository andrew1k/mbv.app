<template>
  <v-app-bar
    density="compact"
    prominent
    color="background"
    elevation="0"
    flat
  >
    <VBtn icon="mdi-menu" class="font-weight-regular" v-if="mainScreen" @click="drawer = !drawer"/>
    <VBtn
      v-if="!mainScreen"
      @click="$router.back()"
      icon="mdi-chevron-left"
      class="font-weight-regular"
    />
    {{ appbarTitle }}
    <VSpacer/>
    <VBtn v-if="mainScreen" icon="mdi-hand-heart" to="/giving" color="primary"/>
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
  mainScreen: {
    type: Boolean,
    required: true,
  },
})

const appState = useAppState()
const {drawer} = storeToRefs(appState)
</script>
