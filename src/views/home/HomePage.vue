<template>
  <v-card rounded="0" variant="text" max-width="600" class="mx-auto">
    <StoriesFeed/>
    <SundayCard/>
    <WeekEvents/>
    <v-card class="mx-2 mt-10 py-1 mb-4" color="primary" to="/connect">
      <VCardItem>
        <template #prepend>
          <VIcon icon="mdi-list-box-outline" />
        </template>
        <template #append>
          <VIcon icon="mdi-chevron-right" />
        </template>
        <template #title>
          <h4 class="font-weight-medium">Есть вопрос?</h4>
        </template>
      </VCardItem>
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
