<template>
  <v-bottom-navigation
    :density="platform === 'ios' ? 'default' : 'comfortable'"
    elevation="0"
    grow
    bg-color="background"
    :class="platform === 'ios' ? 'pb-3' : 'pb-0'"
  >
    <v-btn :active="false" variant="plain" :to="{name: 'Home'}">
      <v-icon size="25">{{ $route.name === 'Home' ? 'mdi-home' : 'mdi-home-outline' }}</v-icon>
    </v-btn>
    <v-btn :active="false" :to="{name: 'Calendar'}" variant="plain">
      <v-icon size="25">{{ $route.name === 'Calendar' ? 'mdi-calendar-month' : 'mdi-calendar-blank' }}</v-icon>
    </v-btn>
    <v-btn :active="false" :to="{name: 'Discover'}" variant="plain">
      <v-icon size="25">{{ $route.name === 'Discover' ? 'mdi-compass' : 'mdi-compass-outline'}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
defineProps({
  platform: {
    type: String,
  },
})
</script>
