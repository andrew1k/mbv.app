<template>
  <v-card rounded="0" variant="text">
    <StoryCreationCard/>
    <NewsCreationCard/>
    <UpdateSundayCard/>
    <CreateEvent/>
    <v-btn class="mt-6" block size="large" to="/admin/formReview">Заполненные формы</v-btn>
  </v-card>
</template>

<script setup>
import StoryCreationCard from '@/components/admin/StoryCreationCard.vue'
import NewsCreationCard from '@/components/admin/NewsCreationCard.vue'
import UpdateSundayCard from '@/components/admin/UpdateSundayCard.vue'
import CreateEvent from '@/components/admin/CreateEvent.vue'
</script>
