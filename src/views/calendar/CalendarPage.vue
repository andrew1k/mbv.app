<template>
  <v-card elevation="0" rounded="0" variant="text" max-width="600" class="mx-auto">
    <v-card rounded="xl" class="ma-2">
      <CalendarComponent />
    </v-card>
    <AllEvents/>
  </v-card>
</template>

<script setup>
import CalendarComponent from '@/components/calendar/CalendarComponent.vue'
import AllEvents from '@/components/calendar/AllEvents.vue'
</script>
