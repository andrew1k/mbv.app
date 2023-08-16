<template>
  <v-bottom-navigation
    :density="platform === 'ios' ? 'default' : 'comfortable'"
    elevation="0"
    grow
    bg-color="background"
    :class="platform === 'ios' ? 'pb-3' : 'pb-0'"
  >
    <v-btn :active="false" :to="{name: 'Home'}">
      <v-icon size="25">mdi-home</v-icon>
    </v-btn>
    <v-btn :active="false" :to="{name: 'Calendar'}">
      <v-icon size="25">mdi-calendar</v-icon>
    </v-btn>
    <v-btn :active="false" :to="{name: 'Discover'}">
      <v-icon size="25">mdi-compass</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
defineProps({
  platform: {
    type: String
  }
})
</script>
