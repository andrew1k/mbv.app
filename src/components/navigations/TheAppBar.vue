<template>
  <v-app-bar
    density="compact"
    prominent
    color="background"
    elevation="0"
    flat
  >
    <VBtn class="font-weight-regular" variant="text" v-if="mainScreen" @click="drawer = !drawer">
      <template #prepend>
        <VIcon size="22" icon="mdi-menu"/>
      </template>
      {{ appbarTitle }}
    </VBtn>
    <VBtn v-if="!mainScreen" @click="$router.back()" class="font-weight-regular">
      <template #prepend>
        <VIcon size="22" icon="mdi-chevron-left"/>
      </template>
      {{ appbarTitle }}
    </VBtn>
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
