<template>
  <v-card-title class="mt-2">В это воскресенье</v-card-title>
  <v-card class="ma-2" v-if="isPending" variant="tonal">
    <VResponsive :aspect-ratio="16 / 9"/>
  </v-card>
  <v-card v-if="!isPending" to="/sunday" class="ma-2">
    <LiteYouTubeEmbed :id="sunday?.id" :title="sunday?.title"/>
  </v-card>
  <VSkeletonLoader v-if="isPending" type="list-item-two-line" color="background"/>
  <v-card-text v-if="!isPending">
    <h4 class="font-weight-light" v-html="sunday?.title"/>
  </v-card-text>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import {useContentStore} from '@/store/content.store'
import {storeToRefs} from 'pinia'
import {useAppState} from '@/store/app.store'

const contentStore = useContentStore()

const {sunday} = storeToRefs(contentStore)

const appState = useAppState()
const {isPending} = storeToRefs(appState)
</script>
