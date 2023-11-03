<template>
  <v-app-bar
    density="compact"
    prominent
    color="background"
    elevation="0"
    flat
  >
    <VCardItem class="font-weight-regular" v-if="mainScreen" @click="drawer = !drawer">
      <template #prepend>
        <VIcon size="22" icon="mdi-menu"/>
      </template>
        {{ appbarTitle }}
    </VCardItem>
    <VCardItem v-if="!mainScreen" @click="$router.back()" class="font-weight-regular">
      <template #prepend>
        <VIcon icon="mdi-chevron-left"/>
      </template>
      {{ appbarTitle }}
    </VCardItem>
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
