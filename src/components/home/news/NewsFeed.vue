<template>
  <h2 class="mt-6 ml-4 font-weight-medium">Это интересно</h2>
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

const contentStore = useContentStore()
const {getNews} = contentStore
onBeforeMount(() => {
  getNews()
})

const {news} = storeToRefs(contentStore)
</script>
