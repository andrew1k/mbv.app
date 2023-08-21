<template>
  <v-card rounded="0" variant="text" max-width="600" class="mx-auto">
    <StoriesFeed/>
    <SundayCard/>
    <WeekEvents/>
    <v-card class="mx-2 mt-10 mb-4" to="/connect">
      <VCardItem
        prepend-icon="mdi-list-box-outline"
        title="Связь с церковью"
        append-icon="mdi-chevron-right"
      />
    </v-card>
    <NewsFeed/>
  </v-card>
</template>

<script setup>
import WeekEvents from '@/components/calendar/WeekEvents.vue'
import StoriesFeed from '@/components/home/stories/StoriesFeed.vue'
import NewsFeed from '@/components/home/news/NewsFeed.vue'
import SundayCard from '@/components/home/sunday/SundayCard.vue'
</script>
