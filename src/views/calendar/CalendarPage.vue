<template>
  <v-card class="ma-2" rounded="xl">
    <CalendarComponent />
  </v-card>
  <CreateEventCard v-if="isAdmin"/>
  <AllEvents/>
</template>

<script setup>
import CalendarComponent from '@/components/calendar/CalendarComponent.vue'
import AllEvents from '@/components/calendar/AllEvents.vue'
import CreateEventCard from '@/components/calendar/CreateEvent.vue'
import {useAuthStore} from '@/store/authstore'

const {isAdmin} = useAuthStore()
</script>
