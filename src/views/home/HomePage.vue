<template>
  <v-card elevation="0" rounded="0" variant="text" max-width="600" class="mx-auto">
    <StoriesFeed/>
    <SundayCard/>
    <WeekEvents/>
    <NewsFeed/>
  </v-card>
</template>

<script setup>
import WeekEvents from '@/components/calendar/WeekEvents.vue'
import StoriesFeed from '@/components/home/stories/StoriesFeed.vue'
import NewsFeed from '@/components/home/news/NewsFeed.vue'
import SundayCard from '@/components/home/sunday/SundayCard.vue'
</script>
