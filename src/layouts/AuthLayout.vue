<template>
  <VAppBar v-if="platform === 'ios'" density="compact" color="background" />
  <v-main>
    <RouterView/>
  </v-main>
</template>

<script setup>
import {ref} from 'vue'
import {Device} from '@capacitor/device'

const platform = ref('')
Device.getInfo().then(i => {
  platform.value = i.platform
})
</script>
