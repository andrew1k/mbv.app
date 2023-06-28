<template>
  <v-card min-height="140" variant="text" elevation="0" rounded="0" class="mx-1">
    <v-slide-group v-if="isPending">
      <v-slide-group-item>
        <v-card height="130" width="110" class="my-2 mx-1">
          <VSkeletonLoader/>
        </v-card>
        <v-card height="130" width="110" class="my-2 mx-1">
          <VSkeletonLoader/>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
    <v-slide-group v-show="!isPending" v-model="model" selected-class="bg-primary" center-active>
      <v-slide-group-item
        v-for="story in stories"
        :key="story.id"
      >
        <StoryCard
          :title="story.title"
          :link="story.link"
          :link-label="story.linkLabel"
          :link-color="story.linkColor"
          :prev-img="story.previewImgUrl"
          :story-imgs="story.storyImages"
          :color="story.color"
        />
      </v-slide-group-item>
    </v-slide-group>
  </v-card>
</template>

<script setup>
import {useContentStore} from '@/store/content.store'
import {storeToRefs} from 'pinia'
import {onBeforeMount, ref} from 'vue'
import StoryCard from '@/components/home/stories/StoryCard.vue'

import {useAppState} from '@/store/app.store'

const newsfeedStore = useContentStore()
const {getStories} = newsfeedStore
const {stories} = storeToRefs(newsfeedStore)

const appState = useAppState()
const {isPending} = storeToRefs(appState)

onBeforeMount(() => {
  getStories()
})

const model = ref(null)
</script>
