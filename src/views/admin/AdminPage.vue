<template>
  <v-card elevation="0" rounded="0" variant="text" class="mx-auto">
    <StoryCreationCard/>
    <NewsCreationCard/>
    <UpdateSundayCard/>
    <CreateEvent/>
  </v-card>
</template>

<script setup>
import StoryCreationCard from '@/components/admin/StoryCreationCard.vue'
import NewsCreationCard from '@/components/admin/NewsCreationCard.vue'
import UpdateSundayCard from '@/components/admin/UpdateSundayCard.vue'
import CreateEvent from '@/components/admin/CreateEvent.vue'
</script>
