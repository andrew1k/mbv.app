<template>
  <h2 class="mt-6 ml-4">Для вас</h2>
  <!--                                            Skeleton Cards                -->
  <v-card class="ma-2" v-if="isPending">
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col cols="4">
          <v-card elevation="0">
            <VSkeletonLoader type="image"/>
          </v-card>
        </v-col>
        <v-col cols="8" class="d-flex flex-column">
          <VSkeletonLoader type="list-item"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-card class="ma-2" v-if="isPending">
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col cols="4">
          <v-card elevation="0">
            <VSkeletonLoader type="image"/>
          </v-card>
        </v-col>
        <v-col cols="8" class="d-flex flex-column">
          <VSkeletonLoader type="list-item"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <!--                                             News Cards                  -->
  <NewsCard
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :subtitle="item.subtitle"
    :img="item.url"
    :id="item.id"
  />
</template>

<script setup>
import NewsCard from '@/components/home/news/NewsCard.vue'
import {useContentStore} from '@/store/content.store'
import {storeToRefs} from 'pinia'
import {onBeforeMount} from 'vue'
import {useAppState} from '@/store/app.store'

const contentStore = useContentStore()
const {getNews} = contentStore
onBeforeMount(() => {
  getNews()
})

const {news} = storeToRefs(contentStore)

const appState = useAppState()
const {isPending} = storeToRefs(appState)
</script>
