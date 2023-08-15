<template>
  <v-bottom-navigation
    density="default"
    elevation="0"
    grow
    bg-color="background"
    class="pb-3"
  >
    <v-btn :to="{name: 'Home'}">
      <v-icon size="25">mdi-home</v-icon>
    </v-btn>
    <v-btn :to="{name: 'Calendar'}">
      <v-icon size="25">mdi-calendar</v-icon>
    </v-btn>
    <v-btn :to="{name: 'Discover'}">
      <v-icon size="25">mdi-compass</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
