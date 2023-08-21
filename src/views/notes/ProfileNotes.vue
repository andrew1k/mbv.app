<template>
  <v-card variant="text" rounded="0">
    <v-card class="ma-2">
    <v-list v-for="note in savedNotes" :key="note.id">
      <VListItem :title="note.title" append-icon="mdi-chevron-right" :to="{name: 'ProfileSundayNote', params: {id: note.timeId}}" />
    </v-list>
  </v-card>
  </v-card>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useAuthStore} from '@/store/auth.store'

const {savedNotes} = storeToRefs(useAuthStore())
</script>
