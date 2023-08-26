<template>
  <v-bottom-navigation
    :density="platform === 'ios' ? 'default' : 'comfortable'"
    elevation="0"
    grow
    bg-color="background"
    mode="shift"
    :class="platform === 'ios' ? 'pb-3' : 'pb-0'"
  >
    <v-btn :active="false" variant="plain" :to="{name: 'Home'}">
      <v-icon size="30">{{ $route.name === 'Home' ? 'mdi-home-variant' : 'mdi-home-variant-outline' }}</v-icon>
      <span>Главная</span>
    </v-btn>
    <v-btn :active="false" :to="{name: 'Calendar'}" variant="plain">
      <v-icon size="30">{{ $route.name === 'Calendar' ? 'mdi-calendar-month' : 'mdi-calendar-blank' }}</v-icon>
      <span>Календарь</span>
    </v-btn>
    <v-btn :active="false" :to="{name: 'Discover'}" variant="plain">
      <v-icon size="30">{{ $route.name === 'Discover' ? 'mdi-compass' : 'mdi-compass-outline'}}</v-icon>
      <span>Церковь</span>
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
